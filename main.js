var Daudio = new Audio("Drum Kit Starting Files/sounds/tom-1.mp3");
var Aaudio = new Audio("Drum Kit Starting Files/sounds/tom-2.mp3");
var Saudio = new Audio("Drum Kit Starting Files/sounds/tom-3.mp3");
var Jaudio = new Audio("Drum Kit Starting Files/sounds/tom-4.mp3");
var Kaudio = new Audio("Drum Kit Starting Files/sounds/snare.mp3");
var Laudio = new Audio("Drum Kit Starting Files/sounds/kick-bass.mp3");
var Waudio = new Audio("Drum Kit Starting Files/sounds/crash.mp3");
let keyD = document.querySelector(".d-key");
keyD.addEventListener("click", function () {
  Daudio.play();
});
let keyA = document.querySelector(".a-key");
keyA.addEventListener("click", function () {
  Kaudio.play();
});
let keyS = document.querySelector(".s-key");
keyS.addEventListener("click", function () {
  Saudio.play();
});
let keyJ = document.querySelector(".j-key");
keyJ.addEventListener("click", function () {
  Jaudio.play();
});
let keyK = document.querySelector(".k-key");
keyK.addEventListener("click", function () {
  Aaudio.play();
});
let keyL = document.querySelector(".l-key");
keyL.addEventListener("click", function () {
  Laudio.play();
});
let keyW = document.querySelector(".w-key");
keyW.addEventListener("click", function () {
  Waudio.play();
});
