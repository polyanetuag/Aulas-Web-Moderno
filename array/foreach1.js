const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {          // nome + indices(pode passar três parametros: nome,indice, array)
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))        // nome (usando arrowfunction)

const exibirAprovados = aprovado => console.log(aprovado)       //usando 
aprovados.forEach(exibirAprovados)