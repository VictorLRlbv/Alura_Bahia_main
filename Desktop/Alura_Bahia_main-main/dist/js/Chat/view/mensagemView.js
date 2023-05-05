export class MensagemView {
    constructor(seletorElement, mensagens) {
        this._sectionView = document.querySelector(seletorElement);
        this._mensagens = mensagens;
    }
    template(mensagens) {
        return mensagens.lista().map(mensagem => {
            return `
            <div class="alert alert-light mensagem mt-3 me-4 d-block" role="alert">
                <p class="text-secondary dataMensagem">${mensagem.data.replace('"', '').replace('"', '')}</p>
                <p>${mensagem.texto}</p>
            </div>
            `;
        }).join();
    }
    update() {
        let template = this.template(this._mensagens);
        this._sectionView.innerHTML = template;
    }
}
// fs-6
