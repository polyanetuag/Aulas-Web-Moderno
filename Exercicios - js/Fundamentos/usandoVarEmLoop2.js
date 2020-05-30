const funcs = []
for(var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()       // a variável VAR é global, ou seja, funciona tanto fora quanto dentro de um bloco
funcs[8]()       