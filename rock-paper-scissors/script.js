const ROCK = document.getElementById("rock")
const PAPER = document.getElementById("paper")
const SCISSORS = document.getElementById("scissors")

ROCK.addEventListener("click", chooseRock)
PAPER.addEventListener("click", choosePaper)
SCISSORS.addEventListener("click", chooseScissors)

function chooseRock() {

    alert("ESCOGISTE PIEDRA")
    
};

function choosePaper() {

    alert ("Escogiste PAPEL")

}

function chooseScissors() {

    alert ("ESCOGISTE TIJERAS")

}
