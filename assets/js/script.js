/* 
 * Declare variables for DOM elements
 * 
 */
const displayComputerChoice = document.getElementById('computer-emoji');
const displayPlayerChoice = document.getElementById('player-emoji');
const displayResult = document.getElementById('results-message');
let buttons;
let choice;
let computerChoice;
let result;
let resultMessage;
// Array of game outcomes
const outcomes = [
    { player: '🪨', computer: '📜', message: "Paper covers rock! You lose!", result: 2 },
    { player: '🪨', computer: '✂️', message: "Rock blunts scissors! You win!", result: 1 },
    { player: '🪨', computer: '🖖', message: "Spock vaporizes rock! You lose!", result: 2 },
    { player: '🪨', computer: '🦎', message: "Rock crushes lizard! You win!", result: 1 },
    { player: '📜', computer: '🪨', message: "Paper covers rock! You win!", result: 1 },
    { player: '📜', computer: '✂️', message: "Scissors cut paper! You lose!", result: 2 },
    { player: '📜', computer: '🖖', message: "Paper disproves Spock! You win!", result: 1 },
    { player: '📜', computer: '🦎', message: "Lizard eats paper! You lose!", result: 2 },
    { player: '✂️', computer: '🪨', message: "Rock blunts scissors! You lose!", result: 2 },
    { player: '✂️', computer: '📜', message: "Scissors cut paper! You win!", result: 1 },
    { player: '✂️', computer: '🖖', message: "Spock smashes scissors! You lose!", result: 2 },
    { player: '✂️', computer: '🦎', message: "Scissors decapitates lizard! You win!", result: 1 },
    { player: '🖖', computer: '🪨', message: "Spock vaporizes rock! You win!", result: 1 },
    { player: '🖖', computer: '📜', message: "Paper disproves Spock! You lose!", result: 2 },
    { player: '🖖', computer: '✂️', message: "Spock smashes scissors! You win!", result: 1 },
    { player: '🖖', computer: '🦎', message: "Lizard poisons Spock! You lose!", result: 2 },
    { player: '🦎', computer: '🪨', message: "Rock crushes lizard! You lose!", result: 2 },
    { player: '🦎', computer: '📜', message: "Lizard eats paper! You win!", result: 1 },
    { player: '🦎', computer: '✂️', message: "Scissors decapitates lizard! You lose!", result: 2 },
    { player: '🦎', computer: '🖖', message: "Lizard poisons Spock! You win!", result: 1 }
];
// Add event listeners for buttons
document.addEventListener("DOMContentLoaded", function () {
    buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('class') === 'btn') {
                choice = this.textContent;
                clearDisplay();
                setTimeout(function() {
                    displayPlayerChoice.innerHTML = choice;
                    createComputerChoice();
                    calculateResult();
                    updateTally();
                }, 500); // 500ms delay
            }
        });
    }
});

/**
 * Clears the display of emojis and results message.
 */
function clearDisplay() {
    displayPlayerChoice.innerHTML = "";
    displayComputerChoice.innerHTML = "";
    displayResult.innerHTML = "";
}
/**
 * Generates a random choice for the computer and updates the DOM.
 */
function createComputerChoice() {
    const choices = ['🪨', '📜', '✂️', '🖖', '🦎'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
    displayComputerChoice.innerHTML = computerChoice;
}
/**
 * Calculates the game result based on player and computer choices.
 * Updates the resultMessage and result variables, and displays the result.
 */
function calculateResult() {
    // Check for draw
    if (choice === computerChoice) {
        resultMessage = "It's a draw! Play Again!";
        result = 0;
    } else {
        // Loop through the outcomes array to find the matching outcome
        let outcome;
        for (let i = 0; i < outcomes.length; i++) {
            if (outcomes[i].player === choice && outcomes[i].computer === computerChoice) {
                outcome = outcomes[i];
                break; // Stop looping once the match is found
            }
        }
        if (outcome) {
            resultMessage = outcome.message;
            result = outcome.result;
        }
    }
    displayResult.innerHTML = resultMessage;
}
/* update tally for player and computer
credit Code Institute LOve Maths Tutor */
function updateTally() {
    if (result === 1) {
        let oldPlayerTally = parseInt(document.getElementById('player-tally').innerText);
        document.getElementById('player-tally').innerText = ++oldPlayerTally;
    } else if (result === 2) {
        let oldComputerTally = parseInt(document.getElementById('computer-tally').innerText);
        document.getElementById('computer-tally').innerText = ++oldComputerTally;
    }
}

// Function to reset the tally
function resetTally() {
    document.getElementById('player-tally').innerText = 0;
    document.getElementById('computer-tally').innerText = 0;
    clearDisplay();
}

// Modal code - credit W3schools.com code library

//Get the modal
const modal = document.getElementById("rules-modal");

// Get the button that opens the modal
const rulesBtn = document.getElementById("rules");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
rulesBtn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};