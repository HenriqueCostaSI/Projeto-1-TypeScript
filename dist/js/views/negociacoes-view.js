export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
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
                    `;
        }).join('')}
            </tbody>

        </table>

        `;
    }
    uptade(model) {
        this.elemento.innerHTML = this.template(model);
        console.log(this.template(model));
    }
}
