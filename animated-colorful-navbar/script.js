let container = document.querySelector(".nav-container");
let menu = document.querySelectorAll(".menu");
let shapes = document.querySelectorAll(".menu svg");
let highlighter = document.getElementsByClassName("highlighter")[0];
let bodyColor = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
let menuColor = ["#ff8c00", "#f54888", "#4343f5", "#e0b115", "#65ddb7"];
let halo = document.querySelectorAll(".menu .halo");

let prev;
document.addEventListener("click", (event) => {
  for (let i = 0; i < menu.length; i++) {
    let shapeParent = event.target.parentElement;

    if (event.target.matches(".menu svg")) {
      if (parseInt(event.target.parentElement.title) === i) {
        highlighter.style.marginLeft = `${shapeParent.offsetLeft - 30}px`;
        halo[i].style.width = "60px";
        halo[i].style.height = "60px";
        menu[i].style.marginTop = "-27px";
        halo[i].style.backgroundColor = menuColor[i];
        container.style.backgroundColor = bodyColor[i];
      } else {
        halo[i].style.width = "0px";
        halo[i].style.height = "0px";
        menu[i].style.marginTop = "0px";
        halo[i].style.backgroundColor = "transparent";
      }
      console.log(event.target.parentElement.title);
    }
    console.log(shapeParent.offsetLeft);
  }
});
