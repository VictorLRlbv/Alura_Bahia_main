import { ContaController } from "./controllers/ContaController.js"

let btnCadastra = document.getElementById('btnCadastra')
let controller = new ContaController('#usuario', '#email', '#numeroTelefone', '#senha')

btnCadastra?.addEventListener('click', (event) => {
    event.preventDefault()
    controller.criaConta();
})
