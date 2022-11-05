import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {

    private elemento: HTMLInputElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }


    template(model: Negociacoes): string {

        return `
        <table class="table table-hover table-bored">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>

            </thead>
            <tbody>
                ${model.lista().map(item => {
                    return `
                        <tr>
                            <td>${item.data}</td>
                            <td>${item.quantidade}</td>
                            <td>${item.valor}</td>
                        </tr>
                    `
                }).join('')}
            </tbody>

        </table>

        `;
    }

    uptade(model: Negociacoes): void {
        this.elemento.innerHTML = this.template(model);
        console.log(this.template(model));
    }
}