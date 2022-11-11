
  
/*export class Negociacao {
        private _data: Date;
        private _quantidade: number;
        private _valor: number;

        constructor(data: Date, quantidade: number, valor: number) {
            this._data = data;
            this._quantidade = quantidade;
            this._valor = valor;
            this._valor = valor;
        }

*/
/* The Negociacao class has a constructor that takes three parameters, all of which are private
properties of the class, and three getters that return the values of those properties. */
export class Negociacao {
        

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get data():Date {
        const data = new Date(this._data.getTime());
        return data; 
    }
    //get quantidade() { return this._quantidade; }
    //get valor() { return this._valor; }
    get volume() { return this.valor * this.quantidade; }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const value = parseFloat(valorString);

        return new Negociacao( date, quantidade, value);
    }
}