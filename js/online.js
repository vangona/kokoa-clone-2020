const ONLINE = document.querySelector(".status-bar__online");

function paintNetwork(event) {
    if(navigator.onLine) {
        ONLINE.innerText = "";
    } else {
        ONLINE.innerText = "No Service";
        ONLINE.classList.add("showing");
    }
}

function init() {
    paintNetwork();
    window.addEventListener("online", paintNetwork);
    window.addEventListener("offline", paintNetwork);
}

init();