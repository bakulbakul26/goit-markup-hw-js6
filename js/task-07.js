"use strict";

const fontControl = document.querySelector("#font-size-control");

const textSpan = document.querySelector("#text");

fontControl.addEventListener("input", function () {
  textSpan.style.fontSize = fontControl.value + "px";
});
