export class Mensagens {
    constructor() {
        this._mensagens = [];
    }
    adiciona(mensagem) {
        this._mensagens.push(mensagem);
    }
    lista() {
        return this._mensagens;
    }
}
