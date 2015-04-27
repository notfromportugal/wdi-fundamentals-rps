////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove() {
    var choice = getInput();
    while (choice !== 'rock' && choice !== 'paper' && choice !=='scissors'){
        console.log ("Invalid choice. Select again.");
        choice = getInput();
        
    
    }
    return choice;
    
}

function getComputerMove() {
    return randomPlay();
}
    
function getWinner(playerMove,computerMove) {
    if (playerMove === computerMove){
        return "draw";
    } else if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'scissors' && computerMove === 'paper')){
        return "player";
    } else {
        return "computer";
    }
} 


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
            console.log("Computer Selects:" + ' ' + computerMove);
        if (winner === 'player'){
            playerWins++;
            console.log("You're a Winner!");
        } else if (winner === 'computer'){
            computerWins++;
            console.log("You're a Loser!");
        } else if (winner === 'draw'){
            console.log("It's a Draw! Play again.");
        } 
        if (playerWins === 5){
            console.log("Congrats! You beat the computer!");
        }
        if (computerWins === 5){
            console.log("Computer won the game. Humans are doomed :(");
        }
        console.log("Player Wins: " + playerWins         + "/ Computer Wins: " + computerWins);
    }
}

playToFive();
