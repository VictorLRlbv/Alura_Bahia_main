const produtos = document.querySelectorAll('.produto')
playstationBtn.addEventListener('click', () => {
    filtraGame('playstation')
})
xBoxBtn.addEventListener('click', () => {
    filtraGame('x-box')
})
nintendoBtn.addEventListener('click', () => {
    filtraGame('nintendo')
})

function filtraGame(console) {
    produtos.forEach(element => {
        if (element.getAttribute('data-console') == `${console}`) {
            element.classList.remove('d-none')
        } else {
            element.classList.add('d-none')
        }
    })
}
