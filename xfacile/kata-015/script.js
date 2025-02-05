"use strict";

function myFunc() {
    const a = document.querySelector("body");
    const b = a.querySelector("div");
    const c = b.querySelector("#clock");

    function HourMinuteSecond() {
        const date = new Date();
        const h = String(date.getHours()).padStart(2, "0");
        const m = String(date.getMinutes()).padStart(2, "0");
        const s = String(date.getSeconds()).padStart(2, "0");
        c.textContent = `${h}:${m}:${s}`;
    }

    HourMinuteSecond();
    setInterval(HourMinuteSecond, 1000);
}

myFunc();