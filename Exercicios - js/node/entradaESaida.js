// buscar parametros diretamente da chamada do terminal

const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n')                         // Saída padrão
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {                             // Entrada padrão
        const nome = data.toString().replace('\n', '')            // Entrar com dados no teclado + enter/ remover o '\n' por uma string vazia

        process.stdout.write(`Fala ${nome}\n`)
        process.exit()
    })
}