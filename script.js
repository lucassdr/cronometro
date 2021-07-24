let _hours = 0;
let _minutes = 0;
let _seconds = 0;
let _milliseconds = 0;
let tictac

let timer_hours = document.getElementById('timer_hours');
let timer_minutes = document.getElementById('timer_minutes');
let timer_seconds = document.getElementById('timer_seconds');
let timer_milliseconds = document.getElementById('timer_milliseconds');

timerHours_timeMinutes.innerHTML = "00" + ":" + "00"
timerSeconds_timeMilliseconds.innerHTML = "00" + ":" + "000"


document.getElementById("btnPlay").disabled = false;
document.getElementById("btnPause").disabled = true;
document.getElementById("btnReset").disabled = true;

document.getElementById("btnPlay").innerHTML = "iniciar";
document.getElementById("btnPause").innerHTML = "pausar";
document.getElementById("btnReset").innerHTML = "zerar";

function play() {
    document.getElementById("btnPause").disabled = false;
    document.getElementById("btnPlay").innerHTML = "continuar";
    tictac = setInterval(timer, 10);
}

function pause() {
    clearInterval(tictac)
    document.getElementById("btnPlay").disabled = false;
    document.getElementById("btnPause").disabled = true;
    document.getElementById("btnReset").disabled = false;
    document.getElementById("btnPlay").innerHTML = "continuar";
}


function resetCounter() {
    _hours = 0;
    _minutes = 0;
    _seconds = 0;
    _milliseconds = 0;

    document.getElementById("btnPause").disabled = true;
    document.getElementById("btnReset").disabled = true;
    document.getElementById("btnPlay").disabled = false;
    document.getElementById("btnPlay").innerHTML = "iniciar";

    timerHours_timeMinutes.innerHTML = "00" + ":" + "00"
    timerSeconds_timeMilliseconds.innerHTML = "00" + ":" + "000"
}


function timer() {
    _milliseconds = ++_milliseconds;

    if (_milliseconds > 100) {
        _seconds = ++_seconds;
        _milliseconds = 0
    }

    if (_seconds > 60) {
        _minutes = ++_minutes;
        _seconds = 0
    }

    if (_minutes > 60) {
        _hours = ++_hours;
        _minutes = 0
    }

    const hoursStr = `${_hours}`
    const minutesStr = `${_minutes}`
    const secondsStr = `${_seconds}`
    const millisecondsStr = `${_milliseconds}`

    timerHours_timeMinutes.innerHTML = "" + hoursStr.padStart(2, "0") + ":" + minutesStr.padStart(2, "0")
    timerSeconds_timeMilliseconds.innerHTML = "" + secondsStr.padStart(2, "0") + ":" + millisecondsStr.padStart(3, "0")
    document.getElementById("btnPlay").disabled = true;
    document.getElementById("btnReset").disabled = true;
}


function userName() {
    let userName = document.getElementById('userName')
    userName.innerHTML = "&copy;lucassdr"
}
userName()

function openIg() {
    window.open("https://www.instagram.com/lucassdr")
}