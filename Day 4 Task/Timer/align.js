let time = 0, interval, running = false, isTimer = false;

function updateDisplay() {
    let hours = Math.floor(time / 3600).toString().padStart(2, '0');
    let minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    let seconds = (time % 60).toString().padStart(2, '0');
    document.getElementById("display").innerText = `${hours}:${minutes}:${seconds}`;
}

function start() {
    if (running) return;
    running = true;
    interval = setInterval(() => {
        time = isTimer ? Math.max(time - 1, 0) : time + 1;
        updateDisplay();
        if (isTimer && time === 0) stop();
    }, 1000);
}

function stop() {
    running = false;
    clearInterval(interval);
}

function reset() {
    stop();
    time = isTimer ? 300 : 0; // Default timer to 5 min (300 sec)
    updateDisplay();
}

function toggleMode() {
    stop();
    isTimer = !isTimer;
    document.querySelector("button.btn-primary").innerText = isTimer ? "Switch to Stopwatch" : "Switch to Timer";
    reset();
}

reset(); // Initialize display