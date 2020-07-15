// FlatMap - map associado com concat

const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo', 
        nota: 8.1
    },{
        nome: 'Ana', 
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca', 
        nota: 8.9
    },{
        nome: 'Roberto',
        nota: 7.3
    }]    
}]

// Objetivo: obter todas as notas, independente de qual turma seja

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)                         // notas ainda separadas

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))

Array.prototype.flatMap = function(callback) {                      // Fazendo um map e um concat
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)                         // todas as notas em uma só array