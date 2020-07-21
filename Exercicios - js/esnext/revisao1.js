// let e const
{
    var a = 2
    let b = 3
    console.log(b)                      // let não possui escopo global
}
console.log(a)


// Template String
const produto = 'iPad'
console.log(`O ${produto} é caro!`)


// Destructuring (desestruturar)
const [l, e, ...tras] = "Cod3r"              // uma string
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]                         // um array
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }      // um objeto
console.log(i, nome)