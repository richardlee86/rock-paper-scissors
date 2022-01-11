//Create function called computerPlay that will randomly return rock, paper, or scissors
const computerPlay = () => {   

    //variable to store random number chosen by computer
    let randomNumber = Math.floor(Math.random() * 3);
    
    //conditional to return rock, paper, or scissors depending on the random
    //number chosen by the randomNumber variable. 
    if(randomNumber === 0){
        return 'rock';
    } else if(randomNumber === 1){
        return 'paper'; 
    }else if (randomNumber === 2){
        return 'scissors'
    }
}

//Create function to play a single round of Rock Paper Scissors
const playRound = (playerSelection, computerSelection) => {

    //make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase(); 
    

    //conditional to return string based on results of game
    if (playerSelection === computerSelection){
        return 'It\'s a tie!'; 
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'You win! Rock beats Scissors!'; 
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You Lose! Paper covers Rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'You Lose! Scissors cuts Paper!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You Win! Paper covers Rock!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors!'; 
    } else {
        return 'You Win! Scissors cuts Paper!';
    }

}
//Write a function called game that simulates the game being played 5 times and keeps score
const game = () => {
    let count = 0; 
    do {
        console.log(playRound(prompt('Please choose Rock, Paper or Scissors'), computerPlay()));
        count ++;
    } while (count < 5);
}

game(); 