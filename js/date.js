const CHATTIME = document.querySelector(".chat__timestamp");

function paintDate() {
    let now = new Date();
    const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토", "일"]
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let day = WEEKDAY[now.getDay()];
    CHATTIME.innerText = `${year}. ${
        month < 10 ? `0${month}` : month}. ${
        date < 10 ? `0${date}` : date}. ${day}`
}

function init() {
    paintDate();
}

init();