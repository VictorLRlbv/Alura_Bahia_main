import { Mensagem } from "../models/Mensagem.js";
import { Mensagens } from "../models/Mensagens.js";
import { Respostas } from "../models/Respostas.js";
import { MensagemRespostaView } from "../view/MensagemRespostaView.js";
import { MensagemView } from "../view/MensagemView.js";
export class MensagemController {
    constructor(data, seletorTextarea) {
        this._data = data;
        this._mensagens = new Mensagens();
        this._respostas = new Respostas();
        this._textarea = document.querySelector(seletorTextarea);
        this._view = new MensagemView('#chat', this._mensagens);
        this._resposta = new MensagemRespostaView('#chat', this._mensagens);
    }
    cria() {
        let newMessage = new Mensagem(this._textarea.value, this._data);
        this._mensagens.adiciona(newMessage);
        this._view.update();
        this.verificaResposta(newMessage.texto, newMessage.data);
        console.log(this._mensagens.lista());
    }
    verificaResposta(mensagem, data) {
        let messageComplete = '';
        if (
        //#region 
        mensagem.toUpperCase().split(' ').some(item => item == 'OI') ||
            mensagem.toUpperCase().split(' ').some(item => item == 'OLA') ||
            mensagem.toUpperCase().split(' ').some(item => item == 'OLÁ') ||
            mensagem.toUpperCase().split(' ').some(item => item == 'TUDO BEM') ||
            mensagem.toUpperCase().split(' ').some(item => item == 'COMO VAI') ||
            mensagem.toUpperCase().split(' ').some(item => item == 'SALVE')
        //#endregion
        ) {
            messageComplete += ` ${'Olá, tudo bem? Estou aqui para te auxiliar e ajudar com o que você precisar!'}`;
        }
        if (
        //#region 
        mensagem.toUpperCase().split(' ').some(item => item == 'NÃO') ||
            mensagem.toUpperCase().split(' ').some(item => item == 'NADA') ||
            mensagem.toUpperCase().split(' ').some(item => item == 'NAO') ||
            mensagem.toUpperCase() === 'TO BEM' ||
            mensagem.toUpperCase() === 'TÔ BEM' ||
            mensagem.toUpperCase() === 'TO BOM' ||
            mensagem.toUpperCase() === 'TÔ BOM' ||
            mensagem.toUpperCase() === 'TO DE BEM' ||
            mensagem.toUpperCase() === 'TÔ DE BEM' ||
            mensagem.toUpperCase() === 'TO DE BOM' ||
            mensagem.toUpperCase() === 'TÔ DE BOM' ||
            mensagem.toUpperCase() === 'TO DE BOA' ||
            mensagem.toUpperCase() === 'TÔ DE BOA' ||
            mensagem.toUpperCase() === 'TO SAFE' ||
            mensagem.toUpperCase() === 'TÔ SAFE' ||
            mensagem.toUpperCase() === 'SAFE' ||
            mensagem.toUpperCase() === 'SUAVE' ||
            mensagem.toUpperCase() === 'TO SUAVE' ||
            mensagem.toUpperCase() === 'TÔ SUAVE' ||
            mensagem.toUpperCase() === 'DE BOA'
        //#endregion
        ) {
            messageComplete += ` ${'Ok então, caso precise de mim é só falar!'}`;
        }
        if (mensagem.toUpperCase().split(' ').some(item => item == 'GAMES') ||
            mensagem.toUpperCase().split(' ').some(item => item == 'JOGOS')) {
            messageComplete += ` ${'Temos vários produtos games, caso tenha interesse <a href="games.html">CLIQUE AQUI</a>.'}`;
        }
        if (mensagem.toUpperCase().split(' ').some(item => item == 'BELEZA') ||
            mensagem.toUpperCase().split(' ').some(item => item == 'SHAMPOO') ||
            mensagem.toUpperCase().split(' ').some(item => item == 'CONDICIONADOR') ||
            mensagem.toUpperCase().split(' ').some(item => item == 'MAQUIAGEM') ||
            mensagem.toUpperCase().split(' ').some(item => item == 'ROUPAS') ||
            mensagem.toUpperCase().split(' ').some(item => item == 'ROUPA')) {
            messageComplete += ` ${'Temos vários produtos de beleza, e uma parceria com uma loja de roupas famosíssima. Caso tenha interesse <a href="produtos-beleza.html">CLIQUE AQUI</a>.'}`;
        }
        this.criaResposta(messageComplete, data);
    }
    responde(mensagensResposta, data) {
        this._resposta.update(mensagensResposta, data);
    }
    criaResposta(msgtxt, data) {
        let newResponse = new Mensagem(msgtxt, data);
        this.responde(newResponse.texto, newResponse.data);
        this._respostas.adiciona(newResponse);
    }
}
