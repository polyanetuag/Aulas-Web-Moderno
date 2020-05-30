const funcs = []
for(let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()       // Com o let, ele imprimi os valores certos para o i (memória da função)
funcs[6]()   
funcs[8]()     