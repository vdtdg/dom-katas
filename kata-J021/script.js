"use strict";

const steps = document.querySelectorAll("TODO");

steps.forEach((step, index) => {
  step.textContent = `${index + 1}. ${step.textContent}`;
});
