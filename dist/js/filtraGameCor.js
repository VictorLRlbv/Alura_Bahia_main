let playstationBtn = document.querySelector('.playstation-filtro')
const xBoxBtn = document.querySelector('.x-box-filtro')
const nintendoBtn = document.querySelector('.nintendo-filtro')
let main = document.querySelector('main')

playstationBtn.addEventListener('click', () => {
    adicionaCor(playstationBtn, 'bg-blue')
})
xBoxBtn.addEventListener('click', () => {
    adicionaCor(xBoxBtn, 'bg-green')
})
nintendoBtn.addEventListener('click', () => {
    adicionaCor(nintendoBtn, 'bg-red')
})

function adicionaCor(elemento, cor) {
    main.classList.remove('bg-blue')
    main.classList.remove('bg-green')
    main.classList.remove('bg-red')
    main.classList.add(`${cor}`)
    playstationBtn.classList.remove('selecionado')
    nintendoBtn.classList.remove('selecionado')
    xBoxBtn.classList.remove('selecionado')
    elemento.classList.add('selecionado')
}
