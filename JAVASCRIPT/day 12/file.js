
//TASK 3:  *****************

function getComputerChoice() { const choices = [`rock`, `paper`, `scissors`];
const random = Math.floor(Math.random() * choices.length); 
 return choices[random];}
const computerChoice = getComputerChoice();
console.log (`computer choice:   ${computerChoice}`);

//TASK 4:  ********************

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    if (playerChoice === computerSelection.toLowerCase()) {
        return "C'est une égalité !";
    }
    if (
        (playerChoice === "rock" && computerSelection === "Scissors") ||
        (playerChoice === "paper" && computerSelection === "Rock") ||
        (playerChoice === "scissors" && computerSelection === "Paper")
    ) {
        return `Vous gagnez ! ${playerSelection} bat ${computerSelection}.`;
    } else {
        return `Vous perdez ! ${computerSelection} bat ${playerSelection}.`;
    }
}
const playerSelection = "Rock"; 
const computerSelection = getComputerChoice();
const result = playRound(playerSelection, computerSelection);
console.log(result);

//TASK 5 and TASK 6 :  **********************

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Choisissez : Rock, Paper ou Scissors").trim();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(`Round ${round}: ${result}`);
        if (result.includes("Vous gagnez")) {
            playerScore++;
        } else if (result.includes("Vous perdez")) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log(`Vous avez gagné le jeu avec un score de ${playerScore}-${computerScore}.`);
    } else if (computerScore > playerScore) {
        console.log(`L'ordinateur a gagné le jeu avec un score de ${computerScore}-${playerScore}.`);
    } else {
        console.log("Le jeu est à égalité.");
    }
}
game();




