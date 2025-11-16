const socket = io();

let currentRoom = null;
let isHost = false;
let hasAnsweredThisRound = false;

// ------------------------------
// DOM ELEMENTS
// ------------------------------
const lobbyScreen = document.getElementById("lobby-screen");
const gameScreen = document.getElementById("game-screen");
const resultsScreen = document.getElementById("results-screen");

const startGameBtn = document.getElementById("startGameBtn");
const roomInfo = document.getElementById("roomInfo");
const playerList = document.getElementById("playerList");

const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const timerDisplay = document.getElementById("timer");
const revealContainer = document.getElementById("reveal-container");

// ------------------------------
// BUTTONS
// ------------------------------
document.getElementById("createRoomBtn").onclick = () => {
    socket.emit("create-room", (res) => {
        currentRoom = res.code;
        isHost = res.host;
        updateLobbyUI();
    });
};

document.getElementById("joinRoomBtn").onclick = () => {
    let code = document.getElementById("joinCodeInput").value.trim();
    let name = document.getElementById("nameInput").value.trim();

    socket.emit("join-room", { code, name }, (res) => {
        if (res.status === "error") {
            alert(res.message);
            return;
        }
        currentRoom = code;
        isHost = res.host;
        updateLobbyUI();
    });
};

startGameBtn.onclick = () => {
    socket.emit("host-start-game", {
        code: currentRoom,
        questions: TRIVIA_QUESTIONS
    });
};

// ------------------------------
// LOBBY UI UPDATE
// ------------------------------
function updateLobbyUI() {
    roomInfo.innerText = "Room Code: " + currentRoom;

    if (isHost) startGameBtn.classList.remove("hidden");
}

// ------------------------------
// SOCKET EVENTS
// ------------------------------
socket.on("player-list", (players) => {
    playerList.innerHTML = "<h3>Players:</h3>";
    Object.values(players).forEach(p => {
        playerList.innerHTML += `<div>${p.name}</div>`;
    });
});

socket.on("show-question", (data) => {
    lobbyScreen.classList.add("hidden");
    resultsScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    hasAnsweredThisRound = false;

    questionText.innerText = data.question;
    revealContainer.classList.add("hidden");
    choicesContainer.innerHTML = "";

    data.choices.forEach((c, index) => {
        const div = document.createElement("div");
        div.className = "choice";
        div.innerText = c;

        div.onclick = () => {
            if (hasAnsweredThisRound) return;
            hasAnsweredThisRound = true;

            document.querySelectorAll(".choice").forEach(x => x.classList.remove("selected"));
            div.classList.add("selected");

            socket.emit("submit-answer", { code: currentRoom, choice: index });
        };

        choicesContainer.appendChild(div);
    });
});

socket.on("timer", (time) => {
    timerDisplay.innerText = time;
});

socket.on("reveal-answer", (correctIndex) => {
    revealContainer.innerText = "Correct Answer: " + TRIVIA_QUESTIONS[0].choices[correctIndex];
    revealContainer.classList.remove("hidden");

    document.querySelectorAll(".choice").forEach((choice, idx) => {
        if (idx === correctIndex) {
            choice.style.borderColor = "#00ff99";
            choice.style.background = "#0f5730";
        } else {
            choice.style.opacity = "0.5";
        }
    });
});

socket.on("game-over", (players) => {
    gameScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");

    let sorted = Object.values(players).sort((a, b) => b.score - a.score);

    let results = "";
    sorted.forEach(p => {
        results += `<div>${p.name}: ${p.score}</div>`;
    });

    document.getElementById("resultsList").innerHTML = results;
});

// ------------------------------
// TRIVIA QUESTIONS — REPLACE WITH YOURS
// ------------------------------
const TRIVIA_QUESTIONS = [
    {
        question: "How much plastic enters the ocean each year?",
        choices: ["1 million tons", "5 million tons", "8 million tons", "15 million tons"],
        answer: 2
    },
    {
        question: "What percentage of ocean plastic comes from land?",
        choices: ["5%", "20%", "50%", "80%"],
        answer: 3
    }
];
