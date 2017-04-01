'use strict';

function multiply(parametr1, parametr2, parametr3) {
    var result;
    
    result = parametr1 * parametr2 * parametr3;
    
    return result;
}

console.log("wynik:" + multiply(3, 9, 10));

var funkcja = function () {
    return "wynik :)"
};

// wypluje treść funkcji - ponieważ funkcja jest zmienną
console.log(funkcja);

// wypluje sam wynik
console.log(funkcja());


// return kończy działania funkcji

/*

Funkcja, kóra pobiera jako argument promień koła i oblicza obwód i pole.

*/

function poleKolaObwodKola(promien) {
    var poleKola;
    var obwodKola;
    
    poleKola = Math.PI * Math.pow(promien, 2);
    obwodKola = 2 * Math.PI * promien;
    
    return "Dla kola o promieniu " + promien + ", pole wynosi: " + poleKola + " oraz obwod kola wynosi: " + obwodKola;
    
}

console.log(poleKolaObwodKola(3));
console.log(poleKolaObwodKola(2));
console.log(poleKolaObwodKola(5));
console.log(poleKolaObwodKola(10));