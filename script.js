"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "ayeeeh mwa";
  buttonsContainer.classList.add("hidden");
  changeImage("yes"); // Change the image when "sige na nga" is clicked
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "ayoko",
    "by naman",
    "ows talaga",
    "pag ako omeyak",
    "iiyak tlga koh sige",
    "hahahahaha ge langs",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  // If the image is "yes", display a special image
  if (image === "yes") {
    catImg.src = `img/cat-yes.jpg`; // Make sure you have this image in the img folder
  } else {
    catImg.src = `img/cat-${image}.jpg`;
  }
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
