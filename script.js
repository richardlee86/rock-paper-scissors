let playerScore = 0;
let computerScore = 0;

//QuerySelectors
const buttons = document.querySelectorAll('button');
const player = document.querySelector('#player');
player.textContent = playerScore;
const computer = document.querySelector('#computer');
computer.textContent = computerScore;
const roundResult = document.querySelector('.roundResult');

//Loop through buttons and apply an eventlistener to each that runs the game when clicked
buttons.forEach(button => {
    button.addEventListener('click', e => {
        let playerSelection = button.innerHTML.toLowerCase();
        let computerSelection = computerPlay();         
      playRound(playerSelection, computerSelection); //change from console.log to DOM method!!
    })
})

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
    
    computerSelection = computerPlay();    

    //conditional to return string based on results of game
    
        if (playerScore === 5 ) {
            roundResult.textContent = 'Game Over!! You Win!!!';
            playerScore = 0;
            computerScore = 0;
            player.textContent = playerScore;
            computer.textContent = computerScore;
            //roundResult.textContent = ' ';
            return;
            
        } else if(computerScore === 5) {
            roundResult.textContent = 'Game Over!! You Lose!!';
            playerScore = 0;
            computerScore = 0;
            player.textContent = playerScore;
            computer.textContent = computerScore;
            //roundResult.textContent = ' ';
            return;
        } else {        
    
                if (playerSelection === computerSelection){
                    roundResult.textContent = 'It\'s a tie!';  
                } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
                    roundResult.textContent = 'You Win! Rock beats Scissors!'; 
                    playerScore++; 
                    player.textContent = playerScore;
                } else if (playerSelection === 'rock' && computerSelection === 'paper'){
                    roundResult.textContent = 'You Lose! Paper covers Rock!'; 
                    computerScore++;
                    computer.textContent = computerScore;
                } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
                    roundResult.textContent = 'You Lose! Scissors cuts Paper!'; 
                    computerScore++;
                    computer.textContent = computerScore;
                } else if (playerSelection === 'paper' && computerSelection === 'rock'){
                    roundResult.textContent = 'You Win! Paper covers Rock!'; 
                    playerScore++;
                    player.textContent = playerScore;
                } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                    roundResult.textContent = 'You Lose! Rock beats Scissors!';  
                    computerScore++;
                    computer.textContent = computerScore;
                } else {        
                    roundResult.textContent = 'You Win! Scissors cuts Paper!'; 
                    playerScore++;
                    player.textContent = playerScore;
                }
                
            }   
    
}







