export class Mensagem {
    constructor(text, date) {
        this._messageText = text;
        this._messageData = date;
    }
    get texto() {
        return this._messageText;
    }
    get data() {
        return this._messageData;
    }
}
