import { Conta } from "./Conta.js";

export class Contas {
    private _contas: Conta[] = []
    adiciona(conta: Conta) {
        this._contas.push(conta)
    }
    lista(): ReadonlyArray<Conta> {
        return this._contas
    }
}
