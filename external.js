//create two global variables to store each players score
let playerScore = 0,
  computerScore = 0;

//generate random choice
function getComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(event) {
  //declare a variable playerSelection and store the event nodes class
  let playerSelection = event.target.classList.value;

  //take the computer choice in another variable
  let computerSelection = getComputerChoice(["ROCK", "PAPER", "SCISSOR"]);

  //create two variables that'll reference to divs result and score
  const resultDiv = document.querySelector(".result");
  const scoreDiv = document.querySelector(".score");
  let result;

  //after any condition is met, increment each player's score and update the result
  if (playerSelection != null) playerSelection = playerSelection.toUpperCase();
  if (playerSelection === computerSelection) {
    result = `It's a tie!`;
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSOR" && computerSelection == "PAPER")
  ) {
    result = `You won ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else {
    result = `You lose ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }

  //update div.result
  resultDiv.textContent = result;
  //update score
  scoreDiv.textContent = `You : ${playerScore} Computer : ${computerScore}`;
}

function playGame() {
  let counter = 0;
  //call the addeventlistener  'click'  and update the score div consequently
  const options = document.querySelector(".options");
  options.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton || counter >= 5) {
      return;
    }
    counter++;
    const round = document.querySelector(".round");
    playRound(event);
    if (counter < 5) {
      round.textContent = `Round ${counter + 1}`;
    } else {
      displayWinner();
    }
  });
}

//after game ends
function displayWinner() {
  const round = document.querySelector(".round");
  if (computerScore > playerScore) round.textContent = "Computer won :/";
  else if (playerScore > computerScore) round.textContent = "You won!";
  else round.textContent = "Nobody won the game ";
}
playGame();
