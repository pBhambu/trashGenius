// trivia.js
require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const OPENAI_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";
const PORT = process.env.PORT || 8080;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static front-end files from /public
app.use(express.static("public"));

// Simple in-memory store for rooms/games
// rooms[code] = { hostId, players: { socketId: {id,name,score}}, questions:[], state, acceptingAnswers, answers }
const rooms = {};

function generateRoomCode() {
  // 4-digit code
  return Math.floor(1000 + Math.random() * 9000).toString();
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// fallback questions if OpenAI isn't available
const fallbackQuestions = [
  { question: "What is the biggest source of plastic pollution in the ocean?", choices: ["Oil spills","Fishing gear","Single-use plastics","Underwater volcanoes"], correctIndex: 2, fact: "Single-use plastics like bags and bottles are a major component of ocean plastic."},
  { question: "What does 'microplastic' mean?", choices: ["Very old plastic","Plastic with microbes","Plastic particles smaller than 5mm","Biodegradable plastic"], correctIndex: 2, fact: "Microplastics are tiny plastic fragments under 5mm that persist in ecosystems."},
  { question: "Which marine animal is commonly harmed by plastic bags?", choices: ["Dolphins","Sea turtles","Octopus","Starfish"], correctIndex: 1, fact: "Sea turtles mistake bags for jellyfish and can choke on them."},
  { question: "What is a major effect of chemical runoff into coastal waters?", choices: ["More fish diversity","Algal blooms leading to dead zones","Cleaner beaches","Warmer air"], correctIndex: 1, fact: "Nutrient runoff creates algal blooms which deplete oxygen, causing 'dead zones'."},
  { question: "Which action reduces ocean pollution the most?", choices: ["Using reusable products","Planting trees in deserts","Turning off lights","Watching ocean documentaries"], correctIndex: 0, fact: "Using reusable bottles and bags greatly reduces the plastics entering waterways."},
  { question: "What is 'ghost fishing'?", choices: ["Fishing at night","Using illegal nets","Lost gear continuing to catch animals","A special fish species"], correctIndex: 2, fact: "Ghost fishing refers to lost or abandoned fishing gear that keeps trapping marine life."}
];

// OpenAI generator (returns array of question objects) — graceful fallback to fallbackQuestions
async function generateQuestions(topic = "ocean pollution", count = 6) {
  if (!OPENAI_KEY) return fallbackQuestions.slice(0, count);

  const prompt = `Create exactly ${count} multiple-choice questions (4 choices each) about "${topic}" targeted at middle/high-school players.
Return valid JSON array ONLY, each object: { "question": "...", "choices": ["..","..","..",".."], "correctIndex": 0-3, "fact": "one or two sentence fact" }`;

  try {
    const body = {
      model: OPENAI_MODEL,
      messages: [
        { role: "system", content: "You are a JSON-only question generator." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 1200
    };

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      console.warn("OpenAI returned non-ok:", res.status);
      return fallbackQuestions.slice(0, count);
    }

    const json = await res.json();
    const content = json.choices?.[0]?.message?.content;
    if (!content) return fallbackQuestions.slice(0, count);

    // parse robustly
    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch (err) {
      const start = content.indexOf('[');
      const end = content.lastIndexOf(']');
      if (start >= 0 && end >= 0) {
        parsed = JSON.parse(content.slice(start, end + 1));
      } else {
        throw err;
      }
    }

    if (!Array.isArray(parsed) || parsed.length === 0) {
      return fallbackQuestions.slice(0, count);
    }

    // normalize
    return parsed.slice(0, count).map(q => ({
      question: q.question,
      choices: q.choices,
      correctIndex: Number(q.correctIndex) || 0,
      fact: q.fact || ""
    }));
  } catch (e) {
    console.warn("OpenAI generation failed:", e?.message || e);
    return fallbackQuestions.slice(0, count);
  }
}

// Utils
function listPlayersForRoom(code) {
  const r = rooms[code];
  if (!r) return [];
  return Object.values(r.players).map(p => ({ id: p.id, name: p.name, score: p.score, isHost: p.id === r.hostId }));
}

// Socket.IO handlers
io.on("connection", (socket) => {
  console.log("socket connected:", socket.id);

  // Create room (host)
  socket.on("create-room", () => {
    const code = generateRoomCode();
    rooms[code] = {
      code,
      hostId: socket.id,
      players: {},
      questions: [],
      state: "lobby",
      acceptingAnswers: false,
      answers: {}
    };
    rooms[code].players[socket.id] = { id: socket.id, name: "Host", score: 0 };
    socket.join(code);
    socket.emit("room-created", { code });
    io.to(code).emit("player-list", listPlayersForRoom(code));
    io.to(code).emit("chat", { name: "System", message: `Room ${code} created.` });
    console.log("room created:", code);
  });

  // Join a room
  socket.on("join-room", ({ code, name }) => {
    const r = rooms[code];
    if (!r) return socket.emit("error-message", "Room does not exist");
    const playerName = name || (`Player${Math.floor(Math.random()*1000)}`);
    socket.join(code);
    r.players[socket.id] = { id: socket.id, name: playerName, score: 0 };
    socket.emit("joined-room", { code, id: socket.id });
    io.to(code).emit("player-list", listPlayersForRoom(code));
    io.to(code).emit("chat", { name: "System", message: `${playerName} joined.` });
    console.log(`${playerName} joined room ${code}`);
  });

  // Leave room
  socket.on("leave-room", (code) => {
    const r = rooms[code];
    if (!r) return;
    const p = r.players[socket.id];
    if (p) {
      delete r.players[socket.id];
      io.to(code).emit("chat", { name: "System", message: `${p.name} left.` });
    }
    socket.leave(code);
    if (Object.keys(r.players).length === 0) {
      delete rooms[code];
    } else {
      if (r.hostId === socket.id) {
        // pick a new host
        const remaining = Object.keys(r.players)[0];
        r.hostId = remaining;
        io.to(code).emit("chat", { name: "System", message: "Host left — new host assigned." });
      }
      io.to(code).emit("player-list", listPlayersForRoom(code));
    }
  });

  // Chat
  socket.on("chat", ({ room, name, message }) => {
    if (!room) return;
    io.to(room).emit("chat", { name, message });
  });

  // Host starts game: generate questions, reset scores, start loop
  socket.on("host-start-game", async ({ code, totalQuestions = 6 }) => {
    const r = rooms[code];
    if (!r) return socket.emit("error-message", "Room not found");
    if (socket.id !== r.hostId) return socket.emit("error-message", "Only host can start");
    if (r.state !== "lobby") return socket.emit("error-message", "Game already started");

    io.to(code).emit("chat", { name: "System", message: "Host requested start — generating questions..." });

    // generate questions (OpenAI or fallback)
    const questions = await generateQuestions("ocean pollution", totalQuestions);

    r.questions = questions;
    Object.values(r.players).forEach(p => p.score = 0);
    r.state = "in-progress";
    io.to(code).emit("game-started");
    io.to(code).emit("player-list", listPlayersForRoom(code));

    // run game loop
    runGameLoop(code).catch(err => {
      console.error("runGameLoop error:", err);
      io.to(code).emit("chat", { name: "System", message: "Game error: " + (err.message || err) });
    });
  });

  // submit answer during answer window
  socket.on("submit-answer", ({ room, choice }) => {
    const r = rooms[room];
    if (!r) return;
    if (!r.acceptingAnswers) return;
    r.answers[socket.id] = Number(choice);
  });

  socket.on("disconnect", () => {
    console.log("disconnect:", socket.id);
    // remove from any rooms
    for (const code of Object.keys(rooms)) {
      const r = rooms[code];
      if (r.players[socket.id]) {
        const name = r.players[socket.id].name;
        delete r.players[socket.id];
        io.to(code).emit("chat", { name: "System", message: `${name} disconnected.` });
        io.to(code).emit("player-list", listPlayersForRoom(code));
        if (Object.keys(r.players).length === 0) {
          delete rooms[code];
        } else {
          if (r.hostId === socket.id) {
            r.hostId = Object.keys(r.players)[0];
            io.to(code).emit("chat", { name: "System", message: "New host assigned." });
            io.to(code).emit("player-list", listPlayersForRoom(code));
          }
        }
      }
    }
  });
});

// game loop (server-controlled timing)
async function runGameLoop(code) {
  const r = rooms[code];
  if (!r) return;
  const questions = r.questions;
  const introMs = 7000;
  const answerMs = 10000;
  const revealMs = 5000;

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];

    // question-only screen
    r.acceptingAnswers = false;
    r.answers = {};
    io.to(code).emit("show-question-only", { question: q.question, index: i+1, total: questions.length });
    await sleep(introMs);

    // choices screen
    r.acceptingAnswers = true;
    const totalSeconds = Math.ceil(answerMs / 1000);
    io.to(code).emit("show-choices", { question: q.question, choices: q.choices, timeLeft: totalSeconds });

    // countdown
    for (let t = totalSeconds; t >= 0; t--) {
      io.to(code).emit("timer", t);
      await sleep(1000);
    }

    r.acceptingAnswers = false;

    // scoring
    Object.entries(r.players).forEach(([id, p]) => {
      const given = (r.answers && (id in r.answers)) ? r.answers[id] : null;
      if (given !== null && given !== undefined && Number(given) === Number(q.correctIndex)) {
        p.score = (p.score || 0) + 1;
      }
    });

    const scoresAfter = {};
    Object.entries(r.players).forEach(([id,p]) => scoresAfter[id] = { name: p.name, score: p.score });

    // reveal: emit individually so each client sees their own answer (yourAnswer)
    Object.entries(r.players).forEach(([id, p]) => {
      const given = (r.answers && (id in r.answers)) ? r.answers[id] : null;
      io.to(id).emit("reveal", {
        question: q.question,
        choices: q.choices,
        correctIndex: q.correctIndex,
        fact: q.fact,
        scores: scoresAfter,
        yourAnswer: given
      });
    });

    await sleep(revealMs);
  }

  // game over
  const final = Object.values(r.players).map(p => ({ name: p.name, score: p.score })).sort((a,b) => b.score - a.score);
  r.state = "finished";
  io.to(code).emit("game-over", { finalScores: final });
}

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  if (!OPENAI_KEY) console.log("No OpenAI key found — using fallback questions.");
});
