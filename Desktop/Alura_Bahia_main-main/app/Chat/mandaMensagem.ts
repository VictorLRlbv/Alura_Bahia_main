import { MensagemController } from "./controllers/MensagemController.js";

let btnMensagem = document.querySelector('#btnMensagem')
let mensagemInput: HTMLInputElement = document.querySelector('#textField')
let novaData = new Date()
let novaDataCaracteristicas = novaData.toString().split(" ")
let dia = novaDataCaracteristicas[2]
let mes = novaData.getMonth()
let hora = `${novaDataCaracteristicas[4].split(':', 2)}`
let date = `${dia}/${mes + 1} ${hora.replace(',', ':')}`
let controller = new MensagemController(date, '#textField')

btnMensagem.addEventListener('click', (event) => {
    controller.cria()
    mensagemInput.value = ''
})
