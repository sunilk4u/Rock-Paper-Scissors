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

    if(playerSelection === "rock" && computerSelection === "rock") {
        return "Draw!";
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection === "rock" && computerSelection === "scissor"){
        return "You Win! Rock beats Scissor";
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection === "paper" && computerSelection === "paper"){
        return "Draw!";
    }
    else if(playerSelection === "paper" && computerSelection === "scisssor"){
        return "You Lose! Scissor beats Paper";
    }
    else if(playerSelection === "scissor" && computerSelection === "rock"){
        return "You Lose! Rock beats Scissor";
    }
    else if(playerSelection === "scissor" && computerSelection === "paper"){
        return "You Win! Scissor beats Paper";
    }
    else if(playerSelection === "scissor" && computerSelection === "scissor"){
        return "Draw!";
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playerSelection + " - " + computerSelection)
console.log(playRound(playerSelection, computerSelection));
