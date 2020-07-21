const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function () {         //executa de 5 em 5s, às 12 hrs(sem importar minutos e segundos), de uma terça-feira
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)                                                   // cancela depois de 20s

//setImmediate      opções de intervalos
//setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {                    // executa aos 30s(importa o dia da semana, a hora e o segundo)
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})