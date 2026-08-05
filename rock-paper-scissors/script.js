const ROCK = {
    elemento : document.getElementById("rock"),
    "ROCK" : "T",
    "PAPER" : "L",
    "SCISSORS" : "W"
}
const PAPER= {
    elemento : document.getElementById("paper"),
    "ROCK" : "W",
    "PAPER" : "T",
    "SCISSORS" : "L"
}
const SCISSORS = {
    elemento : document.getElementById("scissors"),
    "ROCK" : "L",
    "PAPER" : "W",
    "SCISSORS" : "T"
}

ROCK.elemento.addEventListener("click", function () {
    game(ROCK);
});

PAPER.elemento.addEventListener("click", function () {
    game(PAPER);
});

SCISSORS.elemento.addEventListener("click", function () {
    game(SCISSORS);
});

function game(userChoose){
    const computerChoose = computerSelection();
    if (userChoose[computerChoose] === "L"){alert("YOU LOSE")}
    if (userChoose[computerChoose] === "W"){alert("YOU WIN")}
    if (userChoose[computerChoose] === "T"){alert("DRAW")}
}

function computerSelection () {
    const computerChoose = Math.floor(Math.random() * 3);
    if (computerChoose === 0) {return "ROCK"};
    if (computerChoose === 1) {return "PAPER"}
    if (computerChoose === 2) {return "SCISSORS"}
}

