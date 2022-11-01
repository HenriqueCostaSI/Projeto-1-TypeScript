export class Negociacoes {
    constructor() {
        this.negociacoes = []; //Lista d todas as negocicaoes
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
