let tela = document.querySelector('body')
let player = document.querySelector('#player')
let playerContainer = document.querySelector('#playerContainer')
playerContainer.innerHTML = `<img src="./img/KnightIdle-unscreen.gif" class="player float-left fixed-left" id="player">`
let x = 5
window.addEventListener('keydown', (event) => {

    console.log(player.scrollLeft);
    if(event.key == 'd') {
        moveTela(3)
        playerContainer.innerHTML = `<img src="./img/KnightWalk-unscreen (1).gif" class="player float-left fixed-left" id="player">`
    } else if(event.key == 'a') {
        moveTela(-3)
        playerContainer.innerHTML = `<img src="./img/KnightWalk-unscreen (1).gif" class="playerBackwards float-left fixed-left" id="player">`
    }
    window.addEventListener('keyup', (event) => {
        playerContainer.innerHTML = `<img src="./img/KnightIdle-unscreen.gif" class="player float-left fixed-left" id="player">`
    })
})
function moveTela(direcao) {
    x = window.scrollX
    x = x + direcao
    window.scroll(x, 0)
    player.scroll(x, 0)
    console.log()
}
