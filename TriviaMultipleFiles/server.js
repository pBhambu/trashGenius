// -----------------------------
// SERVER.JS — Multiplayer Trivia
// -----------------------------

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve your public folder
app.use(express.static(path.join(__dirname, "public")));

// Rooms data structure
const rooms = {};

// Helper: Generate 4-digit room code
function generateCode() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

// -----------------------------
// SOCKET.IO HANDLERS
// -----------------------------
io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Create a room
    socket.on("create-room", (callback) => {
        const code = generateCode();
        rooms[code] = {
            host: socket.id,
            players: {},
            gameStarted: false,
            currentQuestionIndex: 0,
            timer: 0,
            intervalId: null
        };

        socket.join(code);
        rooms[code].players[socket.id] = { name: "Host", score: 0 };

        callback({ status: "ok", code: code, host: true });
        console.log("Room created:", code);
    });

    // Join a room
    socket.on("join-room", ({ code, name }, callback) => {
        if (!rooms[code]) {
            return callback({ status: "error", message: "Room does not exist." });
        }

        if (rooms[code].gameStarted) {
            return callback({ status: "error", message: "Game already started." });
        }

        socket.join(code);
        rooms[code].players[socket.id] = { name: name, score: 0 };

        callback({ status: "ok", host: socket.id === rooms[code].host });

        io.to(code).emit("player-list", rooms[code].players);
    });

    // HOST STARTS GAME
    socket.on("host-start-game", ({ code, questions }) => {
        if (!rooms[code]) return;
        if (socket.id !== rooms[code].host) return;

        rooms[code].gameStarted = true;
        rooms[code].questions = questions;
        rooms[code].currentQuestionIndex = 0;

        startQuestion(code);
    });

    // Handle answer submissions
    socket.on("submit-answer", ({ code, choice }) => {
        const room = rooms[code];
        if (!room) return;

        const player = room.players[socket.id];
        if (!player) return;

        const question = room.questions[room.currentQuestionIndex];

        if (choice === question.answer) {
            player.score += 100; // +100 points for correct
        }
    });

    // Handle disconnect
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);

        for (const code in rooms) {
            if (rooms[code].players[socket.id]) {
                delete rooms[code].players[socket.id];

                io.to(code).emit("player-list", rooms[code].players);

                // If host disconnects → destroy room
                if (rooms[code].host === socket.id) {
                    delete rooms[code];
                    console.log("Room deleted:", code);
                }
            }
        }
    });
});

// -----------------------------
// GAME LOGIC
// -----------------------------

function startQuestion(code) {
    const room = rooms[code];
    if (!room) return;

    if (room.currentQuestionIndex >= room.questions.length) {
        io.to(code).emit("game-over", room.players);
        return;
    }

    const question = room.questions[room.currentQuestionIndex];

    // Reset timer
    room.timer = 10;

    io.to(code).emit("show-question", {
        question: question.question,
        choices: question.choices,
        index: room.currentQuestionIndex
    });

    // Timer loop
    clearInterval(room.intervalId);
    room.intervalId = setInterval(() => {
        room.timer--;
        io.to(code).emit("timer", room.timer);

        if (room.timer <= 0) {
            clearInterval(room.intervalId);
            io.to(code).emit("reveal-answer", question.answer);

            setTimeout(() => {
                room.currentQuestionIndex++;
                startQuestion(code);
            }, 3000);
        }
    }, 1000);
}

// -----------------------------
// START SERVER
// -----------------------------
const PORT = 8080; // change if needed
server.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});
