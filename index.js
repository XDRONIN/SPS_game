function randomchoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}
function playgame() {
  let pwin = 0;
  let cwin = 0;
  let PWIN = 0;
  let CWIN = 0;
  for (let i = 0; i <= 4; i++) {
    playround(pwin, cwin);
    if (pwin > cwin) {
      PWIN = PWIN + pwin;
      console.log(PWIN);
    } else if (cwin > pwin) {
      CWIN = CWIN + cwin;
    }
  }

  if (CWIN > PWIN) {
    console.log(`The Player wins by ${CWIN} points`);
  } else if (PWIN > CWIN) {
    console.log(`The Computer wins by ${PWIN} points`);
  } else {
    console.log("TIE");
  }
}
function playround(pwin, cwin) {
  let playerChoice = prompt("ROCK , PAPER, SCISSORS");
  let compChoice = randomchoice();
  playerChoice = playerChoice.toLowerCase();
  if (playerChoice === "rock" && compChoice === "scissors") {
    console.log(`player:${playerChoice}`);
    console.log(`computer:${compChoice}`);
    console.log("player wins");
    pwin = pwin + 1;
  } else if (playerChoice === "paper" && compChoice === "rock") {
    console.log(`player:${playerChoice}`);
    console.log(`computer:${compChoice}`);
    console.log("player wins");
    pwin = pwin + 1;
  } else if (playerChoice === "scissors" && compChoice === "paper") {
    console.log(`player:${playerChoice}`);
    console.log(`computer:${compChoice}`);
    console.log("player wins");
    pwin = pwin + 1;
  } else if (playerChoice === compChoice) {
    console.log(`player:${playerChoice}`);
    console.log(`computer:${compChoice}`);
    console.log("TIE");
  } else {
    console.log(`player:${playerChoice}`);
    console.log(`computer:${compChoice}`);
    console.log("Computer wins");
    cwin = cwin + 1;
  }
  return pwin, cwin;
}
playgame();
