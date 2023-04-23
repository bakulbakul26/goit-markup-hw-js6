"use strict";
const listWithId = document.querySelector("#categories");

const liItem = document.querySelectorAll("li.item");
console.log("Number of categories:", liItem.length);
liItem.forEach((item) => {
  console.log("Number of categories:", item.querySelector("h2").textContent);
  console.log("Number of categories:", item.querySelectorAll("li").length);
});
