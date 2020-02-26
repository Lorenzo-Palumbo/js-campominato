var numeriGenerati = [];


while (numeriGenerati.length < 16) {
    var numeroCasuale = generaRandomMinMax(1, 100);
    if (!numeriGenerati.includes(numeroCasuale)) {
        numeriGenerati.push(numeroCasuale)
    }
}
console.log(numeriGenerati);


var numeroInserito = parseInt(prompt('Inserire numero da 1 a 100'));
var numeroControllato = controlloNumeri(numeriGenerati, numeroInserito)
var numeriUtente = [];

/*
function controlloNumeri(listaNumeri, numero){
    var trovato = false;
    for (var i = 0; i < listaNumeri.length; i++) {
        if (listaNumeri[i] == numero) {
            trovato = true;
        }
    }
    return trovato
}
console.log(controlloNumeri(numeriGenerati, numeroInserito));
*/

function inserimentoInArrayNumeriUtente(){
    while (numeriUtente.length < 84 || !numeriUtente.includes(numeroInserito)) {
        var numeroInserito = parseInt(prompt('Inserire numero da 1 a 100'));
        numeriUtente.push(numeroInserito);
    }
}


function generaRandomMinMax(min, max){
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom
}
