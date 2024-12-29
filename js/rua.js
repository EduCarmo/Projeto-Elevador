(function () {
    function criarFaixas() {
        const elementosComFaixas = document.querySelectorAll('[faixas]');

        elementosComFaixas.forEach(e => {
            const qtde = +e.getAttribute('faixas');

            for (let i = 0; i < qtde; i++) {
                const faixa = document.createElement('div')
                faixa.classList.add('faixa')
                e.appendChild(faixa)
            }
        })

    }

    criarFaixas()

})()