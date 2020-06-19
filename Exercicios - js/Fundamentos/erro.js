function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome:erro.name,
        msg: erro.message,
        date: new Date
    }
}


function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
    
}

const obj = {nome:'Roberto'}                //nome!=name
imprimirNomeGritado(obj)





// try = bloco de código que dentro dele se pode julgar um erro no código (códigos potencialmente perigosos)
// catch = para tratar o erro(mostrar msg,relançar um erro, etc)
// throw = lançar mensagem de erro
//finally = bloco que será executado sempre, tendo erro ou não