'use strict';

var wzrostMateusz = 190;
var wzrostKaja = 190;

/* Warunek if */

//if ( wzrostKaja > wzrostMateusz ) {
// Żeby wyswietlic komunikat założenie musi być prawdziwe 
//    console.log("Kaja jest niższa :)");
//}

/* Warunek if i else */

if (wzrostKaja > wzrostMateusz) {
    console.log("Kaja jest wyższa");
} else {
    console.log("Kaja jest niższa");
}

/* Warunek if, else, if */

if (wzrostKaja > wzrostMateusz) {
    console.log("Kaja jest wyższa");
} else if (wzrostKaja == wzrostMateusz) {
    console.log("Kaja tak wysoka jak Mateusz");
} else {
    console.log("Kaja jest niższa");

}

/* Warunek switch */

var kolor = 'zielony';

switch (kolor) {
        
    case 'czerwony':
        console.log('Kolor czerwony')
        break;
    case 'zielony':
        console.log('Kolor zielony')
        break;
    case 'niebieski':
        console.log('Kolor niebieski')
        break;
    default:
        console.log('Inny kolor')
}