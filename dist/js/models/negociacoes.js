/* The Negociacoes class is a class that contains a list of all the Negociacao objects. */
export class Negociacoes {
    constructor() {
        this.negociacoes = []; //Lista de todas as negocicaoes => Negociacao[]
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
