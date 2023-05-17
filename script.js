// Function to get the computer's choice
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return 'It\'s a tie!';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'You win! ' + playerSelection + ' beats ' + computerSelection;
  } else {
    return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
  }
}

// Function to play the game
function game(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);

  // Update the score
  if (result.includes('win')) {
    playerScore++;
  } else if (result.includes('lose')) {
    computerScore++;
  }

  // Display the result and score
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = result;

  const scoreDiv = document.getElementById('score');
  scoreDiv.textContent = 'Player: ' + playerScore + ' | Computer: ' + computerScore;

  // Check if any player reached 5 points
  if (playerScore === 5 || computerScore === 5) {
    // Announce the winner
    if (playerScore === 5) {
      resultDiv.textContent += '\nYou won the game!';
    } else {
      resultDiv.textContent += '\nYou lost the game!';
    }

    // Disable the buttons
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
  }
}

// Initialize the scores
let playerScore = 0;
let computerScore = 0;

// Add event listeners to the buttons
document.getElementById('rock').addEventListener('click', function () {
  game('rock');
});

document.getElementById('paper').addEventListener('click', function () {
  game('paper');
});

document.getElementById('scissors').addEventListener('click', function () {
  game('scissors');
});