import { Conta } from "../models/Conta.js";
import { Contas } from "../models/Contas.js";
import { ContaView } from "../view/ContaView.js";
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
        this._view.update();
        this._emailInput.value = '';
        this._nomeInput.value = '';
        this._senhaInput.value = '';
        this._numeroInput.value = '';
        return;
    }
}
