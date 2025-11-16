// ===== SERVER.JS =====
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

const ROOMS = {}; // roomCode → {hostId, players, state, questionIndex}

// Generate room code
function makeCode() {
    return Math.random().toString(36).substring(2, 6).toUpperCase();
}

// ========== SOCKET.IO ==========
io.on("connection", socket => {

    // CREATE ROOM
    socket.on("create-room", (callback) => {
        const code = makeCode();

        ROOMS[code] = {
            hostId: socket.id,
            players: {},
            state: "lobby",
            questionIndex: 0,
            questions: []
        };

        ROOMS[code].players[socket.id] = {
            name: "Host",
            score: 0,
            choice: null
        };

        socket.join(code);
        callback({ code, host: true });

        io.to(code).emit("player-list", ROOMS[code].players);
    });


    // JOIN ROOM
    socket.on("join-room", (data, callback) => {
        const { code, name } = data;

        if (!ROOMS[code]) {
            return callback({ status: "error", message: "Room does not exist" });
        }

        ROOMS[code].players[socket.id] = {
            name,
            score: 0,
            choice: null
        };

        socket.join(code);
        callback({ status: "ok", host: socket.id === ROOMS[code].hostId });

        io.to(code).emit("player-list", ROOMS[code].players);
    });


    // HOST STARTS GAME
    socket.on("host-start-game", ({ code, questions }) => {
        if (!ROOMS[code]) return;

        ROOMS[code].questions = questions;
        ROOMS[code].questionIndex = 0;

        startQuestion(code);
    });


    // PLAYER ANSWERS
    socket.on("submit-answer", ({ code, choice }) => {
        if (!ROOMS[code]) return;
        if (!ROOMS[code].players[socket.id]) return;

        ROOMS[code].players[socket.id].choice = choice;
    });


    // ON DISCONNECT
    socket.on("disconnect", () => {
        for (let code in ROOMS) {
            if (ROOMS[code].players[socket.id]) {
                delete ROOMS[code].players[socket.id];
                io.to(code).emit("player-list", ROOMS[code].players);
            }
        }
    });
});

// ========== GAME LOGIC ==========
function startQuestion(code) {
    const room = ROOMS[code];
    if (!room) return;

    const q = room.questions[room.questionIndex];

    // reset choices
    for (let p in room.players) {
        room.players[p].choice = null;
    }

    io.to(code).emit("show-question", {
        question: q.question,
        choices: q.choices
    });

    let time = 10;
    const timer = setInterval(() => {
        time--;
        io.to(code).emit("timer", time);

        if (time <= 0) {
            clearInterval(timer);
            revealAnswer(code);
        }
    }, 1000);
}

function revealAnswer(code) {
    const room = ROOMS[code];
    if (!room) return;

    const q = room.questions[room.questionIndex];

    // score update
    for (let id in room.players) {
        if (room.players[id].choice === q.answer) {
            room.players[id].score += 100;
        }
    }

    io.to(code).emit("reveal-answer", q.answer);

    setTimeout(() => {
        room.questionIndex++;

        if (room.questionIndex >= room.questions.length) {
            io.to(code).emit("game-over", room.players);
        } else {
            startQuestion(code);
        }
    }, 4000);
}

// ========== START SERVER ==========
const PORT = 8080;
server.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
    console.log("Your IP (for other computers):");
});
