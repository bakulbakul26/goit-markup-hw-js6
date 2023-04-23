"use strict";

const nameInput = document.getElementById("name-input");

const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  nameOutput.innerText = nameInput.value || "Anonymous";
});
