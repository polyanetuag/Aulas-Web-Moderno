{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}
console.log(sera)     // Variável global (visível a todos)

function teste(){     //  Quando a variável é criada dentro de uma função, ela só fica visível dentro da mesma!
    var local = 123
    console.log(local)
}

teste()
console.log(local)