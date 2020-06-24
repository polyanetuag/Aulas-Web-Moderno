// IIFE -> Immediately Invoked Function Expression
// Função auto invocada - quando quer 'fugir do escopo global' - evita bugs

(function() {                                   //deve envolver a função dentro de ()
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
}) ()   // invocar a função