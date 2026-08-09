
const startBoton = document.getElementById("startBoton");
const userGuessInput = document.getElementById("userGuess");

let computer_number;

startBoton.addEventListener("click", function () {
    document.getElementById("toShow").style.display = "";

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
    const userGuess = Number(userGuessInput.value);

    if (userGuess === computer_number) {
        alert("YOU WIN");
    } else if (userGuess > computer_number) {
        alert("Te pasaste");
    } else {
        alert("Te falta");
    }
}