const alunos = [
    {nome: 'João', nota: 7.9 },
    {nome: 'Maria', nota: 9.2}
]

// Imperativo - Se preocupa em como fazer, os detalhes, o passo a passo

let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)


// Declarativo - Se importa com o que é feito (critérios) 

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)