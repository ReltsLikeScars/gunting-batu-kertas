const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultText = document.getElementById("result-text");

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Seri!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "Anda Menang!";
    } else {
        return "Komputer Menang!";
    }
}

function game(playerSelection) {
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    resultText.textContent = `Hasil: Anda memilih ${playerSelection}, Komputer memilih ${computerSelection}. ${roundResult}`;
}

rockButton.addEventListener("click", () => game("rock"));
paperButton.addEventListener("click", () => game("paper"));
scissorsButton.addEventListener("click", () => game("scissors"));