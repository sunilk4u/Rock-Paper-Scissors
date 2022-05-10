function computerPlay() {
  let rand = Math.random() * 10 + 1;

  if (rand >= 1 && rand <= 3) {
    return "rock";
  } else if (rand >= 4 && rand <= 6) {
    return "paper";
  } else {
    return "scissor";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

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

function game() {
  let userScore = 0;
  let compScore = 0;
  
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter you input");
    const computerSelection = computerPlay();
    console.log("Player Selection : " + playerSelection + " - Computer Selection : " + computerSelection);
    let round = playRound(playerSelection, computerSelection);

    if(round === 1) {
        console.log("You win!");
        userScore++;
    }
    else if(round === 0) {
        console.log("Yoy lose!");
        compScore++;
    }
    else{
        console.log("Draw!");
        userScore++;
        compScore++;
    }
  }

  console.log("Your score : " + userScore + " | Compute Score : " + compScore);
}

game();