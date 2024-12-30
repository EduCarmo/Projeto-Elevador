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
        elementosComAndares.forEach(elemento => {
            const qtde = +elemento.getAttribute('andares')

            for (let i = qtde; i > 0; i--) {
                elemento.appendChild(criarAndar(i))
            }

            elemento.appendChild(criarTerreo())
        })
    }

    criarPavimento()


    // ---------------  Elevador  --------------- //
    function obterTamanhoElevador() {
        const terreo = document.querySelector('[andar="t"]')
        return terreo.offsetHeight
    }

    function criarElevador() {
        const poco = document.querySelector('.poco')
        if (!poco) {
            console.error('Poco nao encontrado')
            return;
        }
        const elevador = document.createElement('div')
        elevador.classList.add('elevador')
        elevador.style.height = `${obterTamanhoElevador()}px`
        elevador.style.bottom = '0px'
        poco.appendChild(elevador)
    }

    function obterPosicaoAtual() {
        const elevador = document.querySelector('.elevador')
        return parseInt(elevador.style.bottom.replace('px', '')) || 0
    }

    function atualizarMostrador(texto) {
        const mostrador = document.querySelector('.mostrador')
        if(mostrador) {
            mostrador.innerHTML = texto
        }
    }

    function moverElevador(andar) {
        const numero = andar === 't' ? 0 : +andar
        const elevador = document.querySelector('.elevador')

        const posicaoInicial = obterPosicaoAtual()
        const posicaoFinal = obterTamanhoElevador() * numero
        const subindo = posicaoFinal > posicaoInicial

        atualizarMostrador(subindo ? 'Subindo' : 'Descendo')

        let temporizador = setInterval(() => {
            const novaPosicao = obterPosicaoAtual() + (subindo ? 10 : -10)
            const terminou = subindo ? novaPosicao >= posicaoFinal : novaPosicao <= posicaoFinal  
            elevador.style.bottom = terminou ? `${posicaoFinal}px` : `${novaPosicao}px`;


            if(terminou) {
                clearInterval(temporizador)
                atualizarMostrador(andar === 't' ? 'Térreo' : `${andar} Andar`)
            }
        }, 30)

    }


    function aplicarControlesDoElevador() {
        const botoes = document.querySelectorAll('[destino]')

        botoes.forEach(botao => {
            const destino = botao.getAttribute('destino')
            botao.onclick = function () {
                moverElevador(destino)
            }
        })
    }


    criarElevador()
    aplicarControlesDoElevador()
    
    
    
})()