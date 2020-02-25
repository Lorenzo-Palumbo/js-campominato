var numeriGenerati = [];

for (var i = 0; i < 16; i++) {
    var numeroCasuale = generaRandomMinMax(1, 100);
    numeriGenerati.push(numeroCasuale)
}
console.log(numeriGenerati);
var numeroInserito = parseInt(prompt('Inserire numero'));
var numeroControllato = controlloNumeri(numeriGenerati, numeroInserito)

for (var i = 0; i < 84; i++) {
    while (numeroControllato == true) {
        var numeroInserito = parseInt(prompt('Inserire numero'));
    }
}

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

function generaRandomMinMax(min, max){
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom
}
