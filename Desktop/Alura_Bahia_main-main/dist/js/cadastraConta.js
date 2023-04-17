import { ContaController } from "./controllers/contaController.js";
let btnCadastra = document.getElementById('btnCadastra');
let controller = new ContaController('#usuario', '#email', '#numeroTelefone', '#senha');
btnCadastra === null || btnCadastra === void 0 ? void 0 : btnCadastra.addEventListener('click', (event) => {
    event.preventDefault();
    controller.criaConta();
});
