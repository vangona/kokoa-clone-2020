const CLOCK = document.querySelector(".status-bar__clock");
const CHATSCLOCK = document.querySelector(".user-component__time");
const CHATCLOCK = document.querySelectorAll(".message__time");

function clock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    CLOCK.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}`;
    if (CHATSCLOCK != null) {
    CHATSCLOCK.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}`; 
    };
    if (CHATCLOCK.length != 0) {
        for(let i = 0; i < 5; i ++) {
        CHATCLOCK[i].innerText = `${hours < 10 ? `0${hours}` : hours}:${
            minutes < 10 ? `0${minutes}` : minutes}`; 
        }
    };
}

function init() {
    clock();
    setInterval(clock, 3000);
}

init();