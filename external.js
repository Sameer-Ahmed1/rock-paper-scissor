const getRndItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const MAX_ROUNDS = 5;
  const CHOICES = ["Rock", "Paper", "Scissor"];
  const resultDiv = document.querySelector(".result");
  const scoreDiv = document.querySelector(".score");
  const roundDiv = document.querySelector(".round");
  const options = document.querySelector(".options");
  const isTie = (plyChoice, compChoice) => plyChoice === compChoice;
  const isPlyWin = (plyChoice, compChoice) =>
    (plyChoice === CHOICES[0] && compChoice === CHOICES[2]) ||
    (plyChoice === CHOICES[1] && compChoice === CHOICES[0]) ||
    (plyChoice === CHOICES[2] && compChoice === CHOICES[1]);
  const updateResult = (result) => (resultDiv.textContent = result);

  let plyScr = 0,
    compScr = 0;
  const updateScore = () =>
    (scoreDiv.textContent = `You : ${plyScr} Computer : ${compScr}`);

  function playRound(event, counter) {
    let plyChoice = event.target.id;
    let compChoice = getRndItem(CHOICES);
    if (isTie(plyChoice, compChoice)) {
      return `It's a tie for the round ${counter}`;
    } else if (isPlyWin(plyChoice, compChoice)) {
      plyScr++;
      return `${plyChoice} beats ${compChoice}! You won the round ${counter}`;
    } else {
      compScr++;
      return `${compChoice} beats ${plyChoice} :/ You lost the round ${counter}`;
    }
  }

  let counter = 0;
  function playGame(event) {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton || counter >= MAX_ROUNDS) {
      return;
    }
    counter++;
    let result = playRound(event, counter);
    updateResult(result);
    updateScore();
    if (counter < MAX_ROUNDS) {
      roundDiv.textContent = `Round ${counter + 1}`;
    } else {
      displayWinner();
    }
  }

  function displayWinner() {
    if (compScr > plyScr) roundDiv.textContent = "Computer won :/";
    else if (plyScr > compScr) roundDiv.textContent = "You won!";
    else roundDiv.textContent = "Nobody won the game ";
  }
  options.addEventListener("click", playGame);
