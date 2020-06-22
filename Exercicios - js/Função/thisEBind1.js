const pessoa = {
    saudacao: 'Bom dia!',
    falar() {                                       // recurso novo: função dentro de objeto
        console.log(this.saudacao)                  // acessando o atributo do objeto usando this
    }
}

pessoa.falar()

const falar = pessoa.falar              //armazenar uma função em uma variável
falar()                                 //conflito entre paradigmas: funcional e OO 
                                      //o this está em outro contexto, por isso, undefined

const falarDePessoa = pessoa.falar.bind(pessoa)         //bind: passa o obj no qual você quer que seja resolvido o this (no caso o this é pessoa)
falarDePessoa()


//Bind : Médo responsável por "amarrar" um determinado objeto para ele ser o dono da execução daquele método, sempre que for chamado