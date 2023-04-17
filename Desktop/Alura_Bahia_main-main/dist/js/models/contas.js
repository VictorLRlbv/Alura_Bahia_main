export class Contas {
    constructor() {
        this._contas = [];
    }
    adiciona(conta) {
        this._contas.push(conta);
    }
    lista() {
        return this._contas;
    }
}
