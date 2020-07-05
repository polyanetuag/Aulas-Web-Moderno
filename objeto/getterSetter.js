// técnica para encapsulamento em código em uma estrutura
// Get = Ler o valor de uma variável 
// Set = Alterar o valor de uma variável 
const sequencia = {
    _valor: 1,   //convenção
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900                           // ignora valores abaixo do valor da sequencia
console.log(sequencia.valor, sequencia.valor)