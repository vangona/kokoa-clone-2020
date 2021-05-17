const BATTERY = document.querySelector(".status-bar__battery")
const CHARGING = document.querySelector(".fa-bolt")

let battryStatus = window.navigator.getBattery();

function paintBattery(battery){
        batteryLevel = battery.level * 100;
        BATTERY.innerText = `${batteryLevel}%`
};


function paintCharging(battery) {
    if (battery.charging == true) {
        CHARGING.classList.add("showing");
    } else if (battery.charging == false) {
        CHARGING.classList.remove("showing");
    }
}

function init() {
    
    battryStatus.then(function(battery){
        paintBattery(battery);
        paintCharging(battery);

        battery.onlevelchange = function() {
            paintBattery(battery);
        }
        battery.onchargingchange = function() {
            paintCharging(battery);
    }
    });
}

init();