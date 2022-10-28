import { Negociacao } from "../models/negociacao.js";


/* The NegociacaoController class is responsible for creating a new Negociacao object and adding it to
the list of Negociacoes. */
export class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    constructor () {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }

    adiciona(): void {

        const negociacao = this.criaNegociacao();
        console.log(negociacao);
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this._inputData.value.replace(exp, ','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const value = parseFloat(this._inputData.value);

        return new Negociacao( date, quantidade, value);
    }
}
