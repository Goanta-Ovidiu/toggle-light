let lightOn = false;

let lightOnOff = function () {
  let btn = document.querySelector("button");
  let bodyOff = document.querySelector("body");

  if (lightOn === false) {
    btn.style.backgroundColor = "black";
    btn.style.boxShadow = " 0 0 5px 5px gold";
    btn.style.color = "white";
    bodyOff.style.backgroundColor = "rgb(54, 54, 54)";
    bodyOff.style.transition = "0.5s ease-in-out";
    lightOn = true;
  } else if (lightOn === true) {
    btn.style.backgroundColor = "white ";
    btn.style.boxShadow = " 0 3px 5px 2px black";
    btn.style.color = "black";
    bodyOff.style.backgroundColor = "white";
    bodyOff.style.transition = "0.5s ease-in-out";
    lightOn = false;
  }
};
