const startBoton = document.getElementById("startBoton");
const userGuessInput = document.getElementById("userGuess");
let computer_number;
let currentRep = 0
const above = "te pasaste"
const below = "te falto"

startBoton.addEventListener("click", function () {
    document.getElementById("toShow").style.display = "";
    document.getElementById("toHide").style.display="none"
    computer_number = random_number(1, 100);

    console.log("Número secreto:", computer_number);
});

userGuessInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        game();

    }
});

function random_number(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(
        Math.random() * (max - min + 1) + min
    );
}

function game() {
    currentRep += 1
    if (currentRep === 1){
        document.getElementById("result").style.display="";

    }

    const userGuess = Number(userGuessInput.value);

    if (userGuess === computer_number) {
        hintsToTheUser("You win", userGuess)
    } else if (userGuess > computer_number) {
        hintsToTheUser(above, userGuess)
    } else {
        hintsToTheUser(below, userGuess)
    }
}

function hintsToTheUser(text, guess) {
    if (text !== "You win"){
        let newText = document.createElement("p");
        newText.textContent = "Tu dijiste " + guess + " pero " + text;
        let userHints = document.getElementById("userHints");
        userHints.appendChild(newText);

    }

    if (text === "You win"){
        let newText = document.createElement("h1")
        newText.textContent = "YOU WIN"
        let userHints = document.getElementById("userHints");
        userHints.appendChild(newText);

    }
    

}