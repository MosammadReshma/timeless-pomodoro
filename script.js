let minutes = 25 * 60; 
let timerInterval = null;

// DOM references
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const musicBtn = document.getElementById("music");
const audio = document.getElementById("bg-music"); 

function updateTimerDisplay() {
    const minutesDisplay = document.getElementById("minutes");
    const secondsDisplay = document.getElementById("seconds");
    const mins = Math.floor(minutes / 60);
    const secs = minutes % 60;
    minutesDisplay.textContent = mins;
    secondsDisplay.textContent = secs < 10 ? "0" + secs : secs;
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (minutes > 0) {
                minutes--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                alert("Time's up! Take a break.");
            }
        }, 1000);
    }
}

function pauseTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function resetTimer() {
    minutes = 25 * 60;
    updateTimerDisplay();
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function toggleMusic() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause()
    }
}

// Event listeners
start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);
music.addEventListener("click", toggleMusic);

// Initial display
updateTimerDisplay();

