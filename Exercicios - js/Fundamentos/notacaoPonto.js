// o uso de pontos permite acessar membros como atributos, funções 

console.log(Math.ceil(6.1))     // Arredondar valores

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'           forma + flexível (a partir de uma string)
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome              // nome associado ao objeto que foi criado a partir dessa função (atributo público)
    this.exec = function() {      // acessando função com 'this'
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()