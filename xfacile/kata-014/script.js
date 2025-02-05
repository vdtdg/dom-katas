"use strict";

function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");
    document.querySelector("#clock").textContent = `${h}:${m}:${s}`;
}

updateClock();
setInterval(updateClock, 1000);