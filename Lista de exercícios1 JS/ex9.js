function notaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if(notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`)
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`)
    }
}

function arredondar(nota) {
    if(nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

notaAluno(100)
notaAluno(30)
notaAluno(38)
notaAluno(88)
notaAluno(61)
notaAluno(29)
