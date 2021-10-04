

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    
    key.classList.add('activate')
    audio.currentTime = 0;
    audio.play();
}



function removeTransition(e) {
    //console.log(e);
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('activate');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))


window.addEventListener("keydown", playSound);

