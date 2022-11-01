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
        this.limparFormulario();
    }

    /**
     * The function criaNegociacao() returns a new Negociacao object, which is created by passing the
     * values of the input fields to the Negociacao constructor.
     * @returns A new instance of Negociacao class.
     */
    criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this._inputData.value.replace(exp, ','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const value = parseFloat(this._inputData.value);

        return new Negociacao( date, quantidade, value);
    }

    limparFormulario(): void {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
}