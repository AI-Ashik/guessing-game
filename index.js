// creating new elements
var totalWins = 0;
var totalLost = 0;

// finding the html elements
const cardBody = document.querySelector(".card-body");
const resultText = document.querySelector(".resultText");
const remainingAttempts = document.querySelector(".remainingAttempts");
const form = document.querySelector("form");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");

// creating new html elements
const gameResultMessage = document.createElement("p");
gameResultMessage.classList.add("large-text");
cardBody.appendChild(gameResultMessage);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkResult(guessingNumber.value);
  guessingNumber.value = "";
});

function checkResult(guessingNumber) {
  const randomNumber = getRandomNumber();
  if (guessingNumber == randomNumber) {
    resultText.innerHTML = `You Have won `;
    totalWins++;
  } else {
    resultText.innerHTML = `You Have Lost The Random Number Was ${randomNumber}`;
    totalLost++;
  }
  gameResultMessage.innerHTML = `Wins : ${totalWins} , Losts : ${totalLost}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}
