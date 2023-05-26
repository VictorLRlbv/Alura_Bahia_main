import { Mensagens } from "../models/Mensagens.js";

export class MensagemView {
    private _sectionView: HTMLElement
    private _mensagens: Mensagens
    constructor(seletorElement: string, mensagens: Mensagens) {
        this._sectionView = document.querySelector(seletorElement)
        this._mensagens = mensagens
    }
    template(mensagens: Mensagens): string {

        return mensagens.lista().map(mensagem => {
            return `
                <div class="alert alert-light mensagem mt-3 me-4 d-block" role="alert">
                    <p class="text-secondary dataMensagem">${mensagem.data.replace('"','').replace('"', '')}</p>
                    <p>${mensagem.texto}</p>
                </div>
            `
        }).join()
    }
    update(): void {
        let template: string = this.template(this._mensagens)
        this._sectionView.innerHTML = template
    }
}
