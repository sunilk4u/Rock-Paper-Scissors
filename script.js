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

console.log(computerPlay());
