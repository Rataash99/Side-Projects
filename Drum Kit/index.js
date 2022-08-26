
// function playSound(e){
// console.log(e)
//     const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)    ;
    
//     if(!audio) return;
//     console.log(audio)
//     audio.currentTime = 0;
//     audio.play();
//     key.classList.add("playing")
// }

// function removeTransition(e){
//     if(e.propertyName !== "transform") return;
//     this.classList.remove("playing");
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// window.addEventListener("keydown",playSound)
const data = ['car', 'car', 'truck', 'van', 'walk', 'bike', 'car', 'truck', 'walk', 'van', 'car', 'truck', 'walk', 'van']

const transportation = data.reduce((obj, item) =>{
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return (obj)
}, {})
console.log(transportation)