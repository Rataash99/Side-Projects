function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    if(random === 0){
        return "Rock"
    }
    else if(random === 1){
        return "Paper"
    }
    else return "Scissor"
}
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    if ( playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper" ){
        return "Computer Wins"
    } 
    else if( playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissor" ){
        return "Player Wins"
    }
    else if ( playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissor" ){
        return "Computer Wins"
    } 
    else if( playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock" ){
        return "Player Wins"
    }
    else if ( playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "rock" ){
        return "Computer Wins"
    } 
    else  return "Player Wins"
}

function game(){
    let playerWinCount = 0
    let computerWinCount = 0
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Please Enter your next move")
        if(playRound(playerSelection,computerSelection) === "Player Wins"){
            playerWinCount++;
        }
        else computerWinCount++
    }
    if(playerWinCount > computerWinCount){
        document.write("player wins")
        return "Player Wins"
    }
    else {
        document.write("computer wins")
        return "Computer Wins"
    }
}
console.log(game())

