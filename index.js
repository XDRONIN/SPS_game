const rbut = document.createElement("button");
const pbut = document.createElement("button");
const sbut = document.createElement("button");
const div1 = document.createElement("div");
rbut.setAttribute("id", "rbut");
pbut.setAttribute("id", "pbut");
sbut.setAttribute("id", "sbut");
div1.setAttribute("id", "div1");
rbut.textContent = "ROCK";
pbut.textContent = "PAPER";
sbut.textContent = "SCISSORS";
rbut.classList.add("butt");
pbut.classList.add("butt");
sbut.classList.add("butt");

document.body.appendChild(div1);

div1.appendChild(rbut);
div1.appendChild(pbut);
div1.appendChild(sbut);
// function randomchoice() {
//   let choices = ["rock", "paper", "scissors"];
//   let choice = Math.floor(Math.random() * choices.length);
//   return choices[choice];
// }
// function playgame() {
//   let PWIN = 0;
//   let CWIN = 0;
//   let winner;
//   for (let i = 0; i <= 4; i++) {
//     winner = playround();
//     if (winner == "player") {
//       PWIN = PWIN + 1;
//     } else if (winner == "computer") {
//       CWIN = CWIN + 1;
//     }
//   }

//   if (CWIN > PWIN) {
//     console.log(`The Computer wins by ${CWIN} points`);
//   } else if (PWIN > CWIN) {
//     console.log(`The Player wins by ${PWIN} points`);
//   } else {
//     console.log("TIE");
//   }
// }

// function playround() {
//   let playerChoice = prompt("ROCK , PAPER, SCISSORS");
//   let compChoice = randomchoice();
//   playerChoice = playerChoice.toLowerCase();
//   if (playerChoice === "rock" && compChoice === "scissors") {
//     console.log(`player:${playerChoice}`);
//     console.log(`computer:${compChoice}`);
//     console.log("player wins");
//     return "player";
//   } else if (playerChoice === "paper" && compChoice === "rock") {
//     console.log(`player:${playerChoice}`);
//     console.log(`computer:${compChoice}`);
//     console.log("player wins");
//     return "player";
//   } else if (playerChoice === "scissors" && compChoice === "paper") {
//     console.log(`player:${playerChoice}`);
//     console.log(`computer:${compChoice}`);
//     console.log("player wins");
//     return "player";
//   } else if (playerChoice === compChoice) {
//     console.log(`player:${playerChoice}`);
//     console.log(`computer:${compChoice}`);
//     console.log("TIE");
//   } else {
//     console.log(`player:${playerChoice}`);
//     console.log(`computer:${compChoice}`);
//     console.log("Computer wins");
//     return "computer";
//   }
// }
// playgame();
