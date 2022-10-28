/* The Negociacao class has a private property called _data, a private property called _quantidade, a
private property called _valor, and a public property called volume. */
export class Negociacao {
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        this._valor = valor;
    }

    get data() { return this._data; }
    get quantidade() { return this._quantidade; }
    get valor() { return this._valor; }
    get volume() {
        return this._valor * this._quantidade;
    }
}