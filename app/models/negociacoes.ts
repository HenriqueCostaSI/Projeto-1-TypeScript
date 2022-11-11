import { Negociacao } from "./negociacao";

/* The Negociacoes class is a class that contains a list of all the Negociacao objects. */
export class Negociacoes {
    private negociacoes: Array<Negociacao>= []; //Lista de todas as negocicaoes => Negociacao[]

    public adiciona(negociacao: Negociacao ) {
        this.negociacoes.push(negociacao);
    }

    public lista(): ReadonlyArray<Negociacao> {// readonly Negociacao[]
        return this.negociacoes;
    }
}
 