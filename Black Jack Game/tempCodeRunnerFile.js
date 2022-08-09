let firstCard = getRandomCard();
// let secondCard = getRandomCard();
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard;
// let hasBlackJack = false;
// let isAlive = true;

// let message = "";
// let messageEl = document.querySelector("#message-el");
// let sumEl = document.querySelector("#sum-el");
// let cardEl = document.querySelector("#card-el");
// let newCardEl = document.querySelector("#newcard-el")

// function startGame(){
//     renderGame();
// }
// function renderGame(){
//     if(sum <= 20){
//         message = "Do you want to draw a new card?";
//     }
//     else if(sum === 21){
//         message = "you've got Blackjack!";
//         hasBlackJack = true;
//     }
//     else{
//         message = "You're out of the game!";
//         isAlive = false;
//     }
//     messageEl.textContent = message;
//     cardEl.textContent = "Cards : "
//     for(let i = 0; i < cards.length; i++){
//          cardEl.textContent += cards[i] + " "
//     }
//     sumEl.textContent = "Sum : " + sum;
// }
// function newCard(){
//     let neoCard = getRandomCard();
//     sum += neoCard;
//     cards.push(neoCard);
//     renderGame();
// }
// function getRandomCard(){
