import { Contas } from "../models/contas.js"

export class ContaView{
    private _element: HTMLElement;
    private _contas: Contas
    constructor(seletorElement: string, contas: Contas) {
        this._element = document.querySelector(seletorElement)
        this._contas = contas
    }
    private template(contas: Contas) {
        if(contas.lista().length < 2) {
            return  `
                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                    <h5 class="text-white">${contas.lista()[0].nome}</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle ms-5" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        `
        
        } else {
            return `
            <div class="offcanvas-header ms-5 header-menu">
                <div class="btn-group">
                    <button class="btn btn-dark btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                            Suas contas
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle ms-5" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                        </h5>
                    </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                    ${contas.lista().map(element => {
                        return `
                            <li class="dropdown-item"><p>${element.nome}</p></li>
                        `
                    }).join('')}
                </ul>
            </div>
        `
        }
    }
    public update() {
        let template = this.template(this._contas)
        this._element.innerHTML = template
        console.log(template)
    };
}