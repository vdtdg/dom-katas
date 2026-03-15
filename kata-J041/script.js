"use strict";

const taskList = document.querySelector("TODO");

taskList.addEventListener("click", function (event) {
  if (!event.target.matches(".remove-btn")) {
    return;
  }

  event.target.closest("li").remove();
});
