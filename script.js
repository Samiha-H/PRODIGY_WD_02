let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector('#stopwatch');
let int = null;

document.getElementById('startStopBtn').addEventListener('click', () => {
    if (int === null) {
        int = setInterval(displayTimer, 10);
        document.getElementById('startStopBtn').innerText = 'Pause';
    } else {
        clearInterval(int);
        int = null;
        document.getElementById('startStopBtn').innerText = 'Start';
    }
});

document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(int);
    int = null;
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerRef.innerHTML = '00:00:00:00';
    document.getElementById('startStopBtn').innerText = 'Start';
    document.getElementById('lapList').innerHTML = '';
});

document.getElementById('lapBtn').addEventListener('click', () => {
    let lapTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
    let li = document.createElement('li');
    li.innerText = lapTime;
    document.getElementById('lapList').appendChild(li);
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = pad(hours);
    let m = pad(minutes);
    let s = pad(seconds);
    let ms = pad(Math.floor(milliseconds / 10));
    timerRef.innerHTML = `${h}:${m}:${s}:${ms}`;
}

function pad(unit) {
    return (unit < 10) ? '0' + unit : unit;
}
