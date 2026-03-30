var Daudio = new Audio("Drum Kit Starting Files/sounds/tom-1.mp3");
var Laudio = new Audio("Drum Kit Starting Files/sounds/tom-2.mp3");
var Aaudio = new Audio("Drum Kit Starting Files/sounds/tom-3.mp3");
var Jaudio = new Audio("Drum Kit Starting Files/sounds/tom-4.mp3");
var Saudio = new Audio("Drum Kit Starting Files/sounds/snare.mp3");
var Kaudio = new Audio("Drum Kit Starting Files/sounds/kick-bass.mp3");
var Faudio = new Audio("Drum Kit Starting Files/sounds/crash.mp3");
let keyD = document.querySelector(".d-key");
keyD.addEventListener("click", function () {
  Daudio.currentTime = 0;
  Daudio.play();
});
let keyA = document.querySelector(".a-key");
keyA.addEventListener("click", function () {
  Kaudio.currentTime = 0;
  Kaudio.play();
});
let keyS = document.querySelector(".s-key");
keyS.addEventListener("click", function () {
  Saudio.currentTime = 0;
  Saudio.play();
});
let keyJ = document.querySelector(".j-key");
keyJ.addEventListener("click", function () {
  Jaudio.currentTime = 0;
  Jaudio.play();
});
let keyK = document.querySelector(".k-key");
keyK.addEventListener("click", function () {
  Aaudio.currentTime = 0;
  Aaudio.play();
});
let keyL = document.querySelector(".l-key");
keyL.addEventListener("click", function () {
  Laudio.currentTime = 0;
  Laudio.play();
});
let keyF = document.querySelector(".f-key");
keyF.addEventListener("click", function () {
  Faudio.currentTime = 0;
  Faudio.play();
});

document.addEventListener("keydown", function (event) {
  switch (event.key.toLowerCase()) {
    case "f":
      Faudio.currentTime = 0;
      Faudio.play();
      break;
    case "a":
      Kaudio.currentTime = 0;
      Kaudio.play();
      break;
    case "s":
      Saudio.currentTime = 0;
      Saudio.play();
      break;
    case "d":
      Daudio.currentTime = 0;
      Daudio.play();
      break;
    case "j":
      Jaudio.currentTime = 0;
      Jaudio.play();
      break;
    case "k":
      Aaudio.currentTime = 0;
      Aaudio.play();
      break;
    case "l":
      Laudio.currentTime = 0;
      Laudio.play();
      break;
    default:
      break;
  }
});
