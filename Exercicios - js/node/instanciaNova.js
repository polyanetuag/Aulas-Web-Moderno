// Uma factory retorna um novo objeto

module.exports = () => {                // retorna uma função
    return {
        valor: 1, 
        inc() {
            this.valor++
        }
    }
}