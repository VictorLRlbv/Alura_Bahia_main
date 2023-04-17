export class Conta {
    constructor(nome, email, numeroTel, senha) {
        this._nome = nome;
        this._email = email;
        this._numeroTel = numeroTel;
        this._senha = senha;
    }
    get nome() {
        return this._nome;
    }
    get email() {
        return this._email;
    }
    get numeroTel() {
        return this._numeroTel;
    }
    get senha() {
        return this._senha;
    }
}
