// pessoa -> 123 (endereço de memória) -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'           // o que muda é o objeto, e não o endereço de memória

console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}   (ERRO)  // como 'pessoa' é uma constante, só pode atribuir um valor uma vez

Object.freeze(pessoa)           // a constante foi congelada. Assim, mesmo que declarar outra, continuará sendo a que foi declarada anteriormente

pessoa.nome = 'Maria'           // sem mudanças
pessoa.end = 'Rua ABC'          //sem adicionar
delete pessoa.nome              // sem deletar

console.log(pessoa.nome)
console.log(pessoa)


// Criar objeto com freeze (não pode ser mudado)
const pessoaConstante = Object.freeze({ nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)