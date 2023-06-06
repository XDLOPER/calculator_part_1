import { window } from "./document.js";

let width = window.offsetWidth;
let height = window.offsetHeight;

window.addEventListener("pointermove", (element) => {
  if (element.pressure > 0) {
    window.style.transform = "none";
    translate(element.pageX, element.pageY);
  }
});

const translate = (x, y) => {
  let moveX = x - width / 2;
  let moveY = y - height / 2;

  window.style.top = moveY + "px";
  window.style.left = moveX + "px";
};
