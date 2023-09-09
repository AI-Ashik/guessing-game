let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totallosts = 0;

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const lostWonMessage = document.createElement("p");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");

const reloadMessage = document.createElement("p");
reloadMessage.classList.add("sm-large-text");
cardBody.appendChild(reloadMessage);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  attempts++;
  if (attempts === 5) {
    guessingNumber.disabled = true;
    checkButton.disabled = true;
    checkButton.classList.add("disabled");
    reloadMessage.innerHTML = "Reload the Page to pay again  or Click F5";
  }
  if (attempts < 6) {
    let guessNumber = Number(guessingNumber.value);
    checkResult(guessNumber);
    remainingAttempts.innerHTML = `Remaining attempts: ${
      totalAttempts - attempts
    }`;
  }
  guessingNumber.value = "";
});

function checkResult(guessingNumber) {
  const randomNumber = getRandomNumber(5);
  if (guessingNumber === randomNumber) {
    resultText.innerHTML = `You Have Won`;
    totalWons++;
  } else {
    resultText.innerHTML = `You Have Lost  The Random Number Was: ${randomNumber}`;
    totallosts++;
  }
  lostWonMessage.innerHTML = `Won: ${totalWons}, Lost: ${totallosts}`;
  lostWonMessage.classList.add("large-text");
  cardBody.appendChild(lostWonMessage);
}

function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
