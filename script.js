let playerScore = 0;
let computerScore = 0;

//QuerySelector to capture all three buttons
const buttons = document.querySelectorAll('button');
const player = document.querySelector('#player');
player.textContent = playerScore;
const computer = document.querySelector('#computer');
computer.textContent = computerScore;

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
        console.log('Game Over!! You Win!!!');
        playerScore = 0;
        computerScore = 0;
    } else if(computerScore === 5) {
        console.log('Game Over!! You Lose!!');
        playerScore = 0;
        computerScore = 0;
    } else {        

            if (playerSelection === computerSelection){
                console.log('It\'s a tie!');  
            } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
                console.log('You Win! Rock beats Scissors!'); 
                playerScore++; 
                player.textContent = playerScore;
            } else if (playerSelection === 'rock' && computerSelection === 'paper'){
                console.log('You Lose! Paper covers Rock!'); 
                computerScore++;
                computer.textContent = computerScore;
            } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
                console.log('You Lose! Scissors cuts Paper!'); 
                computerScore++;
                computer.textContent = computerScore;
            } else if (playerSelection === 'paper' && computerSelection === 'rock'){
                console.log('You Win! Paper covers Rock!'); 
                playerScore++;
                player.textContent = playerScore;
            } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                console.log('You Lose! Rock beats Scissors!');  
                computerScore++;
                computer.textContent = computerScore;
            } else {        
                console.log('You Win! Scissors cuts Paper!'); 
                playerScore++;
                player.textContent = playerScore;
            }
            
        }
}
//Write a function called game that simulates the game being played 5 times and keeps score
// const game = (playerSelection, computerSelection) => {
//     this.computerSelection = computerPlay();
//     let playerScore = 0;
//     let computerScore = 0;
//     let value;       
         
//         value = (playRound(playerSelection, computerSelection)); 
//         console.log(value);      
                
                
//                     if (value === 'You Win! Rock beats Scissors!' || value === 'You Win! Paper covers Rock!' ||
//                     value === 'You Win! Scissors cuts Paper!'){
//                         playerScore++;
//                     } else if(value === 'You Lose! Paper covers Rock!' || value === 'You Lose! Scissors cuts Paper!' || value === 'You Lose! Rock beats Scissors!') {
//                         computerScore++
//                     }                     
                   
                
//     if (playerScore === 5 || computerScore === 5) {

//         //Display message based on scores of game 
//         if(playerScore > computerScore){
//             console.log('You Have Won the Game!');
//             console.log('Player Score: ' + playerScore + '\n' + 'Computer Score: ' + computerScore);
//         } else if (playerScore === computerScore){
//             console.log('It\'s a tie!');
//             console.log('Player Score: ' + playerScore + '\n' + 'Computer Score: ' + computerScore);
//         } else {
//             console.log('You Lost the Game...');
//             console.log('Player Score: ' + playerScore + '\n' + 'Computer Score: ' + computerScore);
//         }
//     }   
// }







