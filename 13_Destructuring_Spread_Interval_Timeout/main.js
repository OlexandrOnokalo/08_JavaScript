

function pad(value) {
    return value.toString().padStart(2, '0');
}

function updateClock() {
    const now = new Date();
    const time =
        pad(now.getHours()) + ':' +
        pad(now.getMinutes()) + ':' +
        pad(now.getSeconds());

    document.getElementById('clock').textContent = time;
}

setInterval(updateClock, 1000);
updateClock();



let timerInterval = null;
let timerValue = 0;

document.getElementById('timerStart').onclick = function () {
    timerValue = parseInt(document.getElementById('timerInput').value);
    document.getElementById('timerMessage').textContent = '';

    if (isNaN(timerValue) || timerValue <= 0) return;

    document.getElementById('timerDisplay').textContent = timerValue;

    timerInterval = setInterval(() => {
        timerValue--;
        document.getElementById('timerDisplay').textContent = timerValue;

        if (timerValue <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timerMessage').textContent = 'Час вийшов!';
        }
    }, 1000);
};

document.getElementById('timerStop').onclick = function () {
    clearInterval(timerInterval);
};



let swInterval = null;
let swTime = 0;

function updateStopwatch() {
    const minutes = Math.floor(swTime / 6000);
    const seconds = Math.floor((swTime % 6000) / 100);
    const ms = swTime % 100;

    document.getElementById('stopwatch').textContent =
        pad(minutes) + ':' + pad(seconds) + ':' + pad(ms);
}

document.getElementById('swStart').onclick = function () {
    if (swInterval) return;

    swInterval = setInterval(() => {
        swTime++;
        updateStopwatch();
    }, 10);
};

document.getElementById('swStop').onclick = function () {
    clearInterval(swInterval);
    swInterval = null;
};

document.getElementById('swReset').onclick = function () {
    clearInterval(swInterval);
    swInterval = null;
    swTime = 0;
    updateStopwatch();
};
