function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const text = document.querySelector(".color");

const color = () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;

  text.textContent = newColor;
};
button.addEventListener("click", color);
