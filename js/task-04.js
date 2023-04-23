"use strict";
const counterValueElement = document.querySelector("#counterValue");
let counterValue = 0;
function incrementCounter() {
  counterValue++;

  counterValueElement.textContent = counterValue;
}
const incrementButton = document.querySelector("#incrementButton");

incrementButton.addEventListener("click", incrementCounter);
function decrementCounter() {
  counterValue--;

  counterValueElement.textContent = counterValue;
}
const decrementButton = document.querySelector("#decrementButton");

decrementButton.addEventListener("click", decrementCounter);
