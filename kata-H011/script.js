const button = document.querySelector("#increment");
const count = document.querySelector("#count");
let value = 0;

button.addEventListener("click", () => {
  value += 1;
  count.textContent = value;
});
