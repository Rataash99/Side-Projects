const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 300;

function shadow(e){

    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    let x = e.offsetX;
    let y = e.offsetY;

    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 1px rgba(134, 22, 0,0.7),
    ${xWalk * -1}px ${yWalk}px 1px rgb(24, 232, 20),
    ${yWalk * -1}px ${xWalk}px 1px rgb(100, 22, 100),
    ${yWalk}px ${xWalk * -1}px 1px rgb(24, 22, 210)
    `
}
hero.addEventListener('mousemove', shadow)