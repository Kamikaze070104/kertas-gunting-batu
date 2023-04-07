const choices = ["paper", "rock", "scissors"];
let i = Math.floor(Math.random() * 3);
let ComChoice = choices[i];
let UserPoints = 0;
let ComPoints = 0;
function score() {
  document.getElementById("score").innerHTML = UserPoints + " - " + ComPoints;
}
setInterval(score, 50);
function convert(word) {
  if (word === "paper") {
    return '<i class="far fa-hand-paper"></i>';
  }
  if (word === "rock") {
    return '<i class="far fa-hand-rock"></i>';
  }
  return '<i class="far fa-hand-scissors"></i>';
}
function game(UserChoice) {
  const box = document.getElementById("challenge");
  box.style.display = "inline-flex";
  const userDiv = document.getElementById("YourObject");
  userDiv.innerHTML = convert(UserChoice);
  const comDiv = document.getElementById("ComObject");
  comDiv.innerHTML = convert(ComChoice);
  if (
    (UserChoice === "paper" && ComChoice === "rock") ||
    (UserChoice === "rock" && ComChoice === "scissors") ||
    (UserChoice === "scissors" && ComChoice === "paper")
  ) {
    win(UserChoice);
  } else if (UserChoice === ComChoice) {
    draw(UserChoice);
  } else {
    lose(UserChoice);
  }
  function continueGame() {
    i = Math.floor(Math.random() * 3);
    ComChoice = choices[i];
    box.style.display = "none";
  }
  setTimeout(continueGame, 1200);
}
function win(w) {
  UserPoints++;
  document.getElementById("who").innerHTML = "KAMU MENANG! :v";
  w = document.getElementById(w);
  w.classList.remove("w");
  w.classList.add("blue");
  setTimeout(() => {
    w.classList.add("w");
    w.classList.remove("blue");
  }, 1200);
}
function draw(drw) {
  document.getElementById("who").innerHTML = "KAMU SERI :3";
  drw = document.getElementById(drw);
  drw.classList.remove("drw");
  drw.classList.add("gray");
  setTimeout(() => {
    drw.classList.add("drw");
    drw.classList.remove("gray");
  }, 1200);
}
function lose(ls) {
  ComPoints++;
  document.getElementById("who").innerHTML = "KAMU KALAH XwX";
  ls = document.getElementById(ls);
  ls.classList.remove("ls");
  ls.classList.add("red");
  setTimeout(() => {
    ls.classList.add("ls");
    ls.classList.remove("red");
  }, 1200);
}
