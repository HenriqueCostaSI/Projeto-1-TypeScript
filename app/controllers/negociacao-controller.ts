
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";



/* The NegociacaoController class is responsible for creating a new Negociacao object and adding it to
the list of Negociacoes. */
export class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private readonly DOMINGO = 0;
    private readonly SABADO = 6

    constructor () {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {

        const negociacao = this.criaNegociacao();
        if(!this.diaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias utéis são aceitas');
            return;
        
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    
    }
    
    diaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    /**
     * The function criaNegociacao() returns a new Negociacao object, which is created by passing the
     * values of the input fields to the Negociacao constructor.
     * @returns A new instance of Negociacao class.
     */
    private criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this._inputData.value.replace(exp, ','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const value = parseFloat(this._inputData.value);

        return new Negociacao( date, quantidade, value);
    }

    private limparFormulario(): void {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação Adicionada com sucesso');
        console.log(this.negociacoes.lista());
    }
}
