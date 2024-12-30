(function () {
    // ---------------  Pavimentos  --------------- //

    function criarTerreo() {
        const janela = document.createElement('div')
        janela.classList.add('janela')

        const terreo = document.createElement('div')
        terreo.classList.add('terreo')
        terreo.setAttribute('andar', 't')
        terreo.appendChild(janela)

        return terreo

    }

    function criarAndar(numeroAndar) {
        const porta = document.createElement('div')
        porta.classList.add('porta')

        const andar = document.createElement('div')
        andar.classList.add('andar')
        andar.setAttribute('andar', numeroAndar)
        andar.appendChild(porta)

        return andar
    }

    function criarPavimento() {
        const elementosComAndares = document.querySelectorAll('[andares]');
        elementosComAndares.forEach(elementosComAndares => {
            const qtde = +elementosComAndares.getAttribute('andares')

            for (let i = qtde; i > 0; i--) {
                elementosComAndares.appendChild(criarAndar(i))
            }

            elementosComAndares.appendChild(criarTerreo())
        })
    }

    criarPavimento()

    // ---------------  Elevador  --------------- //



})()