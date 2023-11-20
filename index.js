const buttons = document.querySelectorAll('button');

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result;
    });
});


function computerPlay(){
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It's a draw!"
    } else if (
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "lizard") ||
        (playerSelection === "lizard" && computerSelection === "spock") ||
        (playerSelection === "spock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "lizard") ||
        (playerSelection === "lizard" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "spock") ||
        (playerSelection === "spock" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors") 
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}