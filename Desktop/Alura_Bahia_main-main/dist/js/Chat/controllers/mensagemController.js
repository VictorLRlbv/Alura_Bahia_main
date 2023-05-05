import { Mensagem } from "../models/Mensagem.js";
import { Mensagens } from "../models/Mensagens.js";
import { MensagemView } from "../view/MensagemView.js";
export class MensagemController {
    constructor(data, seletorTextarea) {
        this._data = data;
        this._mensagens = new Mensagens();
        this._textarea = document.querySelector(seletorTextarea);
        this._view = new MensagemView('#chat', this._mensagens);
    }
    cria() {
        let newMessage = new Mensagem(this._textarea.value, this._data);
        this._mensagens.adiciona(newMessage);
        this._view.update();
        console.log(this._mensagens.lista());
    }
}
