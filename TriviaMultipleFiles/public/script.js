// public/script.js
//public
// Cleaned-up trivia client script — all audio removed and references fixed.
// Keeps original behaviour: lobby, join, chat, start, choices, timer, reveal, scoreboard, leaderboard (optional).

const socket = io();

// UI refs (may be absent in some HTML variants; we guard usages)
const createBtn = document.getElementById('createBtn');
const joinBtn = document.getElementById('joinBtn');
const joinCodeInput = document.getElementById('joinCodeInput');
const nameInput = document.getElementById('nameInput');
const roomInfo = document.getElementById('roomInfo');

const playersArea = document.getElementById('playersArea');
const playersList = document.getElementById('playersList');
const startBtn = document.getElementById('startBtn');

const lobby = document.getElementById('lobby');
const game = document.getElementById('game');

const chat = document.getElementById('chat');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');

const questionOnly = document.getElementById('questionOnly');
const qo_question = document.getElementById('qo_question');

const choicesScreen = document.getElementById('choicesScreen');
const choices_question = document.getElementById('choices_question');
const choicesArea = document.getElementById('choicesArea');
const timerSpan = document.getElementById('timer'); // your index.html uses this id

const revealScreen = document.getElementById('revealScreen');
const reveal_question = document.getElementById('reveal_question');
const reveal_correct = document.getElementById('reveal_correct');
const reveal_fact = document.getElementById('reveal_fact');
const scoreboard = document.getElementById('scoreboard');

const finalScreen = document.getElementById('finalScreen');
const finalScores = document.getElementById('finalScores');
const backToLobby = document.getElementById('backToLobby');

// Optional elements (if you add a leaderboard modal later)
const leaderboardScreen = document.getElementById('leaderboardScreen') || null;
const leaderboardList = document.getElementById('leaderboardList') || null;
const scoresBtn = document.getElementById('scoresBtn') || null;
const closeLeaderboard = document.getElementById('closeLeaderboard') || null;

// State
let currentRoom = null;
let myName = null;
let myId = null;
let canAnswer = false;
let chosenAnswer = null; // what this client selected
let timerMax = 10; // updated when choices arrive

/* helper - escape HTML to avoid injection when showing chat or facts */
function escapeHtml(s) {
  if (!s && s !== 0) return "";
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

/* UI helpers */
function hideAllScreens() {
  if (questionOnly) questionOnly.classList.add('hidden');
  if (choicesScreen) choicesScreen.classList.add('hidden');
  if (revealScreen) revealScreen.classList.add('hidden');
  if (finalScreen) finalScreen.classList.add('hidden');
  if (leaderboardScreen) leaderboardScreen.classList.add('hidden');

  // reset reveal background (inline style)
  if (revealScreen) revealScreen.style.background = "";
  // clear choice highlights safely
  if (choicesArea) {
    Array.from(choicesArea.children || []).forEach(el => {
      el.classList.remove('selected','correct','wrong');
    });
  }
}

function showScreen(el) {
  hideAllScreens();
  if (el) el.classList.remove('hidden');
}

function showPlayersArea(show) {
  if (!playersArea) return;
  playersArea.classList.toggle('hidden', !show);
}

/* --- Events & socket wiring --- */

// Create room
if (createBtn) {
  createBtn.onclick = () => {
    socket.emit('create-room');
  };
}

// Join room
if (joinBtn) {
  joinBtn.onclick = () => {
    const code = (joinCodeInput && joinCodeInput.value || "").trim();
    const name = (nameInput && nameInput.value || "").trim() || ('Player' + Math.floor(Math.random()*100));
    if (!code) return alert('Enter code to join');
    myName = name;
    socket.emit('join-room', { code, name });
  };
}

// Start game (host)
if (startBtn) {
  startBtn.onclick = () => {
    if (!currentRoom) return;
    startBtn.disabled = true;
    socket.emit('host-start-game', { code: currentRoom, totalQuestions: 6 });
  };
}

// Chat send
if (chatSend) {
  chatSend.onclick = () => {
    const txt = (chatInput && chatInput.value || "").trim();
    if (!txt || !currentRoom) return;
    socket.emit('chat', { room: currentRoom, name: myName, message: txt });
    if (chatInput) chatInput.value = '';
  };
}

// Socket handlers
socket.on('room-created', (data) => {
  currentRoom = data.code;
  if (roomInfo) roomInfo.innerText = `Room: ${currentRoom} (you are host)`;
  showPlayersArea(true);
});

socket.on('joined-room', (data) => {
  currentRoom = data.code;
  myId = data.id;
  if (roomInfo) roomInfo.innerText = `Joined room: ${currentRoom}`;
  showPlayersArea(true);
});

socket.on('player-list', players => {
  if (!playersList) return;
  playersList.innerHTML = players.map(p => `<div>${escapeHtml(p.name)}${p.isHost ? ' (host)' : ''} — ${p.score ?? 0}</div>`).join('');
  // update leaderboard snapshot if present
  if (leaderboardList) updateLeaderboardFromPlayers(players);
});

socket.on('chat', m => {
  if (!chat) return;
  chat.innerHTML += `<div><strong>${escapeHtml(m.name||'System')}:</strong> ${escapeHtml(m.message)}</div>`;
  chat.scrollTop = chat.scrollHeight;
});

socket.on('game-started', () => {
  if (lobby) lobby.classList.add('hidden');
  if (game) game.classList.remove('hidden');
  hideAllScreens();
});

socket.on('show-question-only', data => {
  showScreen(questionOnly);
  if (qo_question) qo_question.innerText = data.question || "";
  canAnswer = false;
  chosenAnswer = null;
});

socket.on('show-choices', data => {
  showScreen(choicesScreen);
  if (choices_question) choices_question.innerText = data.question || "";
  if (choicesArea) {
    choicesArea.innerHTML = '';
    const choices = Array.isArray(data.choices) ? data.choices : [];
    choices.forEach((c, i) => {
      const div = document.createElement('div');
      div.className = 'choice';
      div.innerText = c;
      div.onclick = () => {
        if (!canAnswer) return;
        chosenAnswer = i;
        // highlight selection
        Array.from(choicesArea.children).forEach((el, idx) => el.classList.toggle('selected', idx === i));
        socket.emit('submit-answer', { room: currentRoom, choice: i });
      };
      choicesArea.appendChild(div);
    });
  }
  canAnswer = true;

  // timer initial
  const timeLeft = Number(data.timeLeft) || 10;
  timerMax = Math.max(1, timeLeft);
  if (timerSpan) timerSpan.innerText = timeLeft;
});

// server emits the seconds
socket.on('timer', t => {
  if (timerSpan) timerSpan.innerText = t;
  // If you later add a timer circle, you can compute progress with timerMax
});

// reveal (server sends yourAnswer per-socket; fallback to chosenAnswer)
socket.on('reveal', (data) => {
  const correctIndex = Number(data.correctIndex);
  const choices = Array.isArray(data.choices) ? data.choices : [];
  const userAnsRaw = (data.yourAnswer !== undefined && data.yourAnswer !== null) ? data.yourAnswer : chosenAnswer;
  const userAns = (userAnsRaw === null || userAnsRaw === undefined) ? null : Number(userAnsRaw);

  // populate texts
  const chosenLabel = (userAns !== null && choices[userAns]) ? choices[userAns] : null;
  const correctLabel = choices[correctIndex] ?? "(unknown)";

  if (reveal_question) reveal_question.innerText = data.question || "(no question)";
  if (reveal_correct) reveal_correct.innerText = `Correct answer: ${correctLabel}`;

  let yourHtml;
  if (userAns === null || Number.isNaN(userAns)) {
    yourHtml = `<p class="yourAnswer">You did not answer.</p>`;
  } else {
    yourHtml = `<p class="yourAnswer">You chose: <b>${escapeHtml(chosenLabel)}</b></p>`;
  }

  const correctHtml = (userAns !== null && userAns === correctIndex)
    ? `<p class="result correct">Correct! 🎉</p>`
    : `<p class="result wrong">Incorrect ❌</p>`;

  const factHtml = data.fact ? `<p class="fact">💡 ${escapeHtml(data.fact)}</p>` : "";

  if (reveal_fact) reveal_fact.innerHTML = yourHtml + correctHtml + factHtml;

  // color reveal area
  if (revealScreen) {
    if (userAns !== null && userAns === correctIndex) {
      revealScreen.style.background = "#d4f6d4"; // light green
    } else {
      revealScreen.style.background = "#ffd6d6"; // light red
    }
  }

  // mark tiles for clarity (correct/wrong)
  if (choicesArea) {
    Array.from(choicesArea.children).forEach((el, idx) => {
      el.classList.remove('selected','correct','wrong');
      if (idx === correctIndex) el.classList.add('correct');
      else if (userAns !== null && idx === userAns && userAns !== correctIndex) el.classList.add('wrong');
    });
  }

  updateScoreboard(data.scores);
  showScreen(revealScreen);

  // reset chosen for next round
  chosenAnswer = null;
});

socket.on('game-over', data => {
  if (finalScores) finalScores.innerHTML = (data.finalScores || []).map(s => `<div>${escapeHtml(s.name)}: ${s.score}</div>`).join('');
  showScreen(finalScreen);
});

// errors
socket.on('error-message', m => {
  alert(m);
});

/* scoreboard helper */
function updateScoreboard(scores) {
  if (!scoreboard) return;
  scoreboard.innerHTML = Object.entries(scores || {}).map(([id, info]) => `<div>${escapeHtml(info.name)}: ${info.score}</div>`).join('');
  // also update leaderboard modal if present
  if (leaderboardList) buildLeaderboardFromScores(scores);
}

/* build leaderboard modal (optional) */
function buildLeaderboardFromScores(scores) {
  if (!leaderboardList) return;
  const items = Object.entries(scores || {}).map(([id, info]) => ({ name: info.name, score: info.score || 0 }));
  items.sort((a,b) => b.score - a.score);
  leaderboardList.innerHTML = items.map((p,i) => `<div class="leaderboard-entry"><div>${i+1}. ${escapeHtml(p.name)}</div><div>${p.score}</div></div>`).join('');
}

/* update leaderboard from player-list (optional) */
function updateLeaderboardFromPlayers(playersArray) {
  if (!leaderboardList || !Array.isArray(playersArray)) return;
  const items = playersArray.map(p => ({ name: p.name, score: p.score || 0 }));
  items.sort((a,b) => b.score - a.score);
  leaderboardList.innerHTML = items.map((p,i) => `<div class="leaderboard-entry"><div>${i+1}. ${escapeHtml(p.name)}</div><div>${p.score}</div></div>`).join('');
}

/* leaderboard open/close (optional) */
if (scoresBtn) {
  scoresBtn.onclick = () => {
    if (!leaderboardScreen) return;
    leaderboardScreen.classList.remove('hidden');
    leaderboardScreen.style.display = 'block';
  };
}
if (closeLeaderboard) {
  closeLeaderboard.onclick = () => {
    leaderboardScreen.classList.add('hidden');
    leaderboardScreen.style.display = '';
  };
}

/* back to lobby */
if (backToLobby) {
  backToLobby.onclick = () => {
    if (currentRoom) socket.emit('leave-room', currentRoom);
    location.reload();
  };
}

/* chat enter */
if (chatInput) {
  chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') chatSend.click(); });
}
