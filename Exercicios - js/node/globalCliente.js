require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'                     // Não irá mudar por causa do Object.freeze
console.log(MinhaApp.nome)          