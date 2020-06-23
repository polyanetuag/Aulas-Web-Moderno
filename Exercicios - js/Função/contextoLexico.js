//Quando a função é declarada dentro do JS, ela carrega a informaçao do contexto ao qual ela foi declarada/escrita

const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()