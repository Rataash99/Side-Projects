const secondHand = document.querySelector('.second')
const minuteHand = document.querySelector('.minute')
const hourHand = document.querySelector(`.hour`)
function setDate(){
    const date = new Date();
    const seconds = date.getSeconds();
    const secToDegree = ((seconds / 60) * 360) + 90;

    const minutes = date.getMinutes();
    const minToDegree = ((minutes / 60) * 360) + 90;

    const hours = date.getHours()
    const hourToDegree = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secToDegree}deg)`;
    minuteHand.style.transform = `rotate(${minToDegree}deg)`;
    hourHand.style.transform = `rotate(${hourToDegree}deg)`

}

setInterval(setDate, 1000);