"use strict";

// Code à refactorer
(function () {
    let a = ["Apple", "Banana", "Cherry"];
    let b = document.querySelector("#itemList");
    for (let i = 0; i < a.length; i++) {
        let c = document.createElement("li");
        c.textContent = a[i];
        b.appendChild(c);
    }
})();
