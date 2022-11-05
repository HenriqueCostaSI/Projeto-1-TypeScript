export class NegociacoesView {

    private elemento: HTMLInputElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }


    template(): string {

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

            </tbody>

        </table>

        `;
    }

    uptade(): void {
        this.elemento.innerHTML = this.template();
    }
}