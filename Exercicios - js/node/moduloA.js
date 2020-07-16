// o módulo tem uma interioridade, ou seja, só fica visível dentro do módulo
// Para torná-lo público, é necessário 'exportar' e 'importar' algo a partir de outro arquivo

// 3 formas de importar dinamicamente

this.ola = 'Fala pessoal!'
exports.bemVindo = 'Bem vindo ao node!'
module.exports.ateLogo = 'Até próximo exemplo'                 // forma + clássica