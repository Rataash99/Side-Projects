
let cards = []
let hasBlackJack = false;
let isAlive = false;
let sum = 0;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");
let newCardEl = document.querySelector("#newcard-el")

let player = {
    name : "Rataash",
    chips : "15"
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : $" + player.chips

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true
    renderGame();
}
function renderGame(){
    hasBlackJack = false
    if(sum <= 20){
        message = "Do you want to draw a new card?";
    }
    else if(sum === 21){
        message = "you've got a Blackjack!";
        hasBlackJack = true;
    }
    else{
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    cardEl.textContent = "Cards : "
    for(let i = 0; i < cards.length; i++){
         cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum : " + sum;
}
function newCard(){
    if(isAlive && !hasBlackJack){
        let neoCard = getRandomCard();
        sum += neoCard;
        cards.push(neoCard);
        renderGame();
    }
}
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if(randomNumber === 1){
        return 11;
    }
    else if(randomNumber >= 11){
        return 10;
    }
    else{
        return randomNumber;
    }
}
