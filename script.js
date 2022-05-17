function computerPlay() {
  let rand = Math.random() * 10 + 1;

  if (rand >= 1 && rand <= 3) {
    return "Rock";
  } else if (rand >= 4 && rand <= 6) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection =computerSelection.toLowerCase();

  if (playerSelection === "rock" && computerSelection === "rock") {
    return -1;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return 0;
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    return 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return 1;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return -1;
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    return 0;
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    return 0;
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    return 1;
  } else if (playerSelection === "scissor" && computerSelection === "scissor") {
    return -1;
  }
}

let userScore = 0;
let compScore = 0;
let resultText = "";

function game(playerSelection, computerSelection) {
  let round = playRound(playerSelection, computerSelection);
  if (round === 1) {
    resultText = "You win!";
    userScore++;
  } else if (round === 0) {
    resultText = "You lose!";
    compScore++;
  } else {
    resultText = "Draw!";
  }
}

function doSome(e) {
  const playerSelection = e.target.innerText;
  const computerSelection = computerPlay();

  document.getElementsByClassName("user_choice")[0].innerText = playerSelection;
  document.getElementsByClassName("computer_choice")[0].innerText =
    computerSelection;

  game(playerSelection, computerSelection);

  document.getElementsByClassName("user-score")[0].innerText = userScore;
  document.getElementsByClassName("computer-score")[0].innerText = compScore;

  if (userScore >= 5) {
    resultText = "User won the match!";
    buttons.forEach(button => button.disabled = true);
  } else if (compScore >= 5) {
    resultText = "Computer won the match!";
    buttons.forEach(button => button.disabled = true);
  }

  document.getElementsByClassName("display_result")[0].innerText = resultText;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", doSome));
