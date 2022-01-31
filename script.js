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
    if (playerSelection === computerSelection){
        return 'It\'s a tie!'; 
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'You Win! Rock beats Scissors!'; 
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You Lose! Paper covers Rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'You Lose! Scissors cuts Paper!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You Win! Paper covers Rock!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors!'; 
    } else {
        console.log(playerSelection);
        console.log(computerSelection);
        return 'You Win! Scissors cuts Paper!';
    }

}
//Write a function called game that simulates the game being played 5 times and keeps score
const game = (playerSelection, computerSelection) => {
    this.computerSelection = computerPlay();
    let playerScore = 0;
    let computerScore = 0;
    let value;       
         
        value = (playRound(playerSelection, computerSelection)); 
        console.log(value);      
                
                
                    if (value === 'You Win! Rock beats Scissors!' || value === 'You Win! Paper covers Rock!' ||
                    value === 'You Win! Scissors cuts Paper!'){
                        playerScore++;
                    } else if(value === 'You Lose! Paper covers Rock!' || value === 'You Lose! Scissors cuts Paper!' || value === 'You Lose! Rock beats Scissors!') {
                        computerScore++
                    }                     
                   
                
                    
                
     

    //Display message based on scores of game 
    if(playerScore > computerScore){
        console.log('You Have Won the Game!');
        console.log('Player Score: ' + playerScore + '\n' + 'Computer Score: ' + computerScore);
    } else if (playerScore === computerScore){
        console.log('It\'s a tie!');
        console.log('Player Score: ' + playerScore + '\n' + 'Computer Score: ' + computerScore);
    } else {
        console.log('You Lost the Game...');
        console.log('Player Score: ' + playerScore + '\n' + 'Computer Score: ' + computerScore);
    }
}

//QuerySelector to capture all three buttons
const buttons = document.querySelectorAll('button');

//Loop through buttons and apply an eventlistener to each that runs the game when clicked
buttons.forEach(button => {
    button.addEventListener('click', e => {
        let playerSelection = button.innerHTML.toLowerCase();         
      console.log(game(playerSelection));
    })
})

//Need to add function to get playerSelection


// buttons.addEventListener('click', function(e){
//         if(e.innerHTML === 'Rock'){
//             return 'Rock';
//         } else if(e.innerHTML === 'Paper') {
//             return 'Paper'; 
//         } else if (e.innerHTML === 'Scissors'){
//             return 'Scissors'; 
//         }
//     });

// rock.addEventListener('click', e => {
//     console.log('rock');
// });



