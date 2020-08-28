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
        const alturaSuperior =Math.random() * (altura - abertura)
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

const b = new ParDeBarreiras(700, 200, 400)
document.querySelector('[wm-flappy]').appendChild(b.elemento)