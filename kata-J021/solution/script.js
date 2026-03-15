"use strict";

const steps = document.querySelectorAll(".step");

steps.forEach((step, index) => {
  step.textContent = `${index + 1}. ${step.textContent}`;
});
