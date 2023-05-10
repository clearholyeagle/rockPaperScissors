// This function randomly returns either rock, paper, or scissors
function getComputerChoice() {
    // First, generate a random number between 0 and 2 (inclusive)
    const randomNumber = Math.floor(Math.random() * 3);
  
    // If the random number is 0, return "rock"
    if (randomNumber === 0) {
      return "rock";
    } 
    // If the random number is 1, return "paper"
    else if (randomNumber === 1) {
      return "paper";
    } 
    // If the random number is 2, return "scissors"
    else {
      return "scissors";
    }
  }
  

  function playRound(playerSelection, computerSelection) {
    // Check if player wins
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      // Return the result with the player's choice and computer's choice
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } 
    // Check if computer wins
    else if (
      (playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'rock')
    ) {
      // Return the result with the computer's choice and player's choice
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } 
    // Otherwise, it's a tie
    else {
      // Return the result with both choices
      return `It's a tie! You both chose ${playerSelection}`;
    }
  }
  
      
// 5 round game that keeps score & reports a winner or loser at the end
    function game(){
        let playerScore = 0;
        let computerScore = 0;

        // 5 Rounds
        for (let i = 0; i < 5; i++){
            const playerSelection = prompt('Choose Rock, Paper, or Scissors').toLowerCase();
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);

        // Update scores based on result
        if (result.startsWith('You Win!')){
            playerScore++;
        } else if (result.startsWith('You Lose!')){
            computerScore++;
        }
        console.log(result);
        }
        // Report the winner or loser
        if (playerScore > computerScore) {
            console.log(`You win the game! Final score: ${playerScore}-${computerScore}`);
        } else if (playerScore < computerScore){
            console.log(`You lose the game! Final score: ${playerScore}-${computerScore}`);
        } else {
            console.log(`It's a tie! Final score: ${playerScore}-${computerScore}`);
        }
    }

    game();