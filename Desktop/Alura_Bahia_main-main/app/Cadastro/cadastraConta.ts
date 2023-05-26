import { ContaController } from "./controllers/ContaController.js"

let btnCadastra = document.querySelector('#btnCadastrar')
let controller = new ContaController('#nome', '#email', '#telefone', '#senha')

btnCadastra.addEventListener('click', (event) => {
    event.preventDefault()
    controller.criaConta();
})
