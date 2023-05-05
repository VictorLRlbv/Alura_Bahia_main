export class Mensagem {
    private _messageText: string
    private _messageData: string
    constructor(text: string, date: string) {
        this._messageText = text
        this._messageData = date
    }
    get texto(): string {
        return this._messageText
    }
    get data(): string {
        return this._messageData
    }
}
