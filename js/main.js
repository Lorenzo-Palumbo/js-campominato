var numeriGenerati = numeriCasualiInArray(16, 100);
console.log(numeriGenerati);
var numeriUtente = [];

//genero un ciclo che finisce o quando vinco o quando perdo
//- vinco quando : quando numeriUtente == 84
//- perdo quando : quando trovo una mina! => gameover = false => finche è false vado avanti..

//Dentro il ciclo
//- il numero è già stato inserito? se si non faccio nulla e richiederà un altro numero, altrimenti vado avanti
//- il numero è una delle mine? se si gameover = true, altrimenti aggiungo il numero dentro numeriUtente
var bomba = false
while (numeriUtente.length + 1 < 85 && bomba == false) {
    var numeroInserito = parseInt(prompt('Inserire numero da 1 a 100'));
    if (numeriUtente.includes(numeroInserito) || numeroInserito < 1 || numeroInserito > 100) {
        alert('Hai già inserito questo numero oppure non è compreso tra 1 e 100')
    } else if (numeriGenerati.includes(numeroInserito)) {
        console.log('Hai perso');
        bomba = true
    } else if (numeriUtente.length == 84) {
        console.log('Hai vinto');
    } else {
        numeriUtente.push(numeroInserito);
    }
}

//Scopriamo se ho vinto o perso..
//- se numeriUtente == 84 allora ho vinto!
//- se ho perso : gameover sarà true

console.log(numeriUtente);


function numeriCasualiInArray(numTotaleGenerati, maxNumeri) {
    var numeriGenerati = [];
    while (numeriGenerati.length < numTotaleGenerati) {
        var numeroCasuale = generaRandomMinMax(1, 100);
        if (!numeriGenerati.includes(numeroCasuale)) {
            numeriGenerati.push(numeroCasuale);
        }
    }
    return numeriGenerati
}

function generaRandomMinMax(min, max){
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom
}
