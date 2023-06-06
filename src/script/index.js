// style imports
import "../style/reset.css";
import "../style/styles.css";

//script imports
import {
  window,
  buttonClose,
  buttonCover,
  callBackButton,
} from "./document.js";
import "./move.js";
import "./number.js";

//events
callBackButton.addEventListener("click", (e) => {
  window.style.transform = "none";
  window.style.display = "block";
});

buttonClose.addEventListener("click", (e) => {
  window.style.cssText = window.style.cssText + "opacity:0.3; transition:0.3s";
  setTimeout(() => {
    window.style = "display:none";
  }, 200);
});
buttonCover.addEventListener("click", (e) => {
  window.classList.toggle("toggleWindowCover");
});
