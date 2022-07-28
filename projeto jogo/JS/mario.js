const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump')
   
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition < 105 && pipePosition > 0 && marioPosition < 90 ) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = './imagens jogo/game-over.png';
        mario.style.width = '90px'
        mario.style.marginLeft = '25px'

        clearInterval(loop);
    }
}, 10);


document.addEventListener('keydown', jump)
