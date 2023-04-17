import { Conta } from "../models/conta.js";
import { Contas } from "../models/contas.js";
import { ContaView } from "../view/contaView.js";
export class ContaController {
    constructor(seletorNome, seletorEmail, seletorNumero, seletorSenha) {
        this._nomeInput = document.querySelector(seletorNome);
        this._emailInput = document.querySelector(seletorEmail);
        this._numeroInput = document.querySelector(seletorNumero);
        this._senhaInput = document.querySelector(seletorSenha);
        this._contas = new Contas();
        this._view = new ContaView('.header-menu', this._contas);
    }
    criaConta() {
        let newConta = new Conta(this._nomeInput.value, this._emailInput.value, this._numeroInput.value, this._senhaInput.value);
        this._contas.adiciona(newConta);
        console.log(this._contas.lista());
        this._view.update();
        this._emailInput.value = '';
        this._nomeInput.value = '';
        this._senhaInput.value = '';
        this._numeroInput.value = '';
        return;
    }
}
