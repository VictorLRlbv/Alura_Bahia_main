export class Conta{
    private _nome: string
    private _email: string
    private _numeroTel: string
    private _senha: string
    constructor(nome: string, email: string, numeroTel: string, senha: string) {
        this._nome = nome
        this._email = email
        this._numeroTel = numeroTel
        this._senha = senha
    }
    get nome() {
        return this._nome
    }
    get email() {
        return this._email
    }
    get numeroTel() {
        return this._numeroTel
    }
    get senha() {
        return this._senha
    }
}