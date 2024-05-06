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
const countDiv = document.createElement("div");
const winDiv = document.createElement("div");
countDiv.classList.add("countDiv");
document.body.appendChild(countDiv);
document.body.appendChild(div1);
let PWIN = 0;
let CWIN = 0;

countDiv.innerHTML = `<div class =pname><h2 id="h2-1">PLAYER    </h2> <h2 id="h2-2">   COMPUTER</h2><br></div>
<div class="count"><p>${PWIN}</p>&nbsp;&nbsp;&nbsp;<p> ${CWIN}</p></div>`;

div1.appendChild(rbut);
div1.appendChild(pbut);
div1.appendChild(sbut);

rbut.addEventListener("click", () => {
  playgame("rock");
});
pbut.addEventListener("click", () => {
  playgame("paper");
});
sbut.addEventListener("click", () => {
  playgame("scissors");
});
function randomchoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}
function playgame(playerChoice) {
  let winner;

  winner = playround(playerChoice);
  if (winner == "player") {
    PWIN = PWIN + 1;
    countDiv.innerHTML = `<div class =pname><h2 id="h2-1">PLAYER    </h2> <h2 id="h2-2">   COMPUTER</h2><br></div>
<div class="count"><p>${PWIN}</p>&nbsp;&nbsp;&nbsp;<p> ${CWIN}</p></div>`;
  } else if (winner == "computer") {
    CWIN = CWIN + 1;
    countDiv.innerHTML = `<div class =pname><h2 id="h2-1">PLAYER    </h2> <h2 id="h2-2">   COMPUTER</h2><br></div>
<div class="count"><p>${PWIN}</p>&nbsp;&nbsp;&nbsp;<p> ${CWIN}</p></div>`;
  }
  if (CWIN == 5) {
    alert(`The Computer wins the game`);
    window.addEventListener("beforeunload", function () {
      window.location.reload();
    });
  } else if (PWIN == 5) {
    alert(`The Player wins the game`);
    window.addEventListener("beforeunload", function () {
      window.location.reload();
    });
  }
}
function display(playerChoice, compChoice) {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<p>player:${playerChoice}</p>
  <p>computer:${compChoice}</p>`;
  newDiv.classList.add("newDiv");

  document.body.appendChild(newDiv);
}
function playround(playerChoice) {
  let compChoice = randomchoice();
  playerChoice = playerChoice.toLowerCase();
  if (playerChoice === "rock" && compChoice === "scissors") {
    display(playerChoice, compChoice);
    const wins = document.createElement("p");
    wins.classList.add("wins");
    wins.textContent = "Player Wins!!";
    document.body.append(wins);
    return "player";
  } else if (playerChoice === "paper" && compChoice === "rock") {
    display(playerChoice, compChoice);
    const wins = document.createElement("p");
    wins.classList.add("wins");
    wins.textContent = "Player Wins!!";

    document.body.append(wins);
    return "player";
  } else if (playerChoice === "scissors" && compChoice === "paper") {
    display(playerChoice, compChoice);
    const wins = document.createElement("p");
    wins.classList.add("wins");
    wins.textContent = "Player Wins!!";
    document.body.append(wins);
    return "player";
  } else if (playerChoice === compChoice) {
    display(playerChoice, compChoice);
    const wins = document.createElement("p");
    wins.classList.add("wins");
    wins.textContent = "   TIE!!";
    document.body.append(wins);
  } else {
    display(playerChoice, compChoice);
    const wins = document.createElement("p");
    wins.classList.add("wins");
    wins.textContent = "computer wins!!";
    document.body.append(wins);
    return "computer";
  }
}
