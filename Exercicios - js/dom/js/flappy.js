function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa  = false) {                           //função construtora
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)          //posições das colunas
    this.elemento.appendChild(reversa ? borda : corpo) 

    this.setAltura = altura => corpo.style.height = `${altura}px`           // alterar a altura da barreira
}

// const b = new Barreira(true)
// b.setAltura(200)                                                     //testes
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)                   //função construtora 'PardeBarreiras' com atributo 'elemento
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {                                      // alternar os espaços entre as colunas
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])     //posição dos pares de barreira
    this.setX = x => this.elemento.style.left = `${x}px`                    //'setar'/alterando a posição x
    this.getLargura = () => this.elemento.clientWidth                       //largura do elemento

    this.sortearAbertura()
    this.setX(x)
}

// const b = new ParDeBarreiras(700, 200, 400)                              //testes
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)                                 // deslocar as barreiras
            
            // quando o elemento sair da área do jogo
            if (par.getX() < -par.getLargura()) {                               // quando a posição x for menor que a tela
                par.setX(par.getX() + espaco * this.pares.length)               //vai mudar de posição e começar a deslocar novamente
                par.sortearAbertura()                                           //para que as barreiras mudem de posicao
            }

            const meio = largura / 2                                            // para marcar ponto
            const cruzouOMeio = par.getX() + deslocamento >= meio && par.getX() < meio
            if (cruzouOMeio) notificarPonto()
        })
    }
}

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])  //posição que o pássaro está voando
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true // para a tecla presionada
    window.onkeyup = e => voando = false // para a tecla "solta"

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2) // setar altura do passaro 
}
 
// const barreiras = new Barreiras(700, 1200, 400, 400)
// const passaro = new Passaro(700)
// const areaDoJogo = document.querySelector('[wm-flappy]')

// areaDoJogo.appendChild(passaro.elemento)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// setInterval(() => {
//     barreiras.animar()
//     passaro.animar()
// },20)