'use strict';

/* petla for */

// wieksze lub rowne 0
/*for ( var i=10 ; i>=0 ; i--) {
    console.log(i);
}*/

/* Petla while - jeżeli nie wiemy ile petla ma sie wykonac */

/*var it = 0;
while ( it <= 10 ) {
    console.log(it);
    it++;
}

var it;
while ( it != 6 ) {
    console.log(it);
    // losowanie od 1 do 10
    it = Math.floor((Math.random() * 10) + 1);
}*/

/* Petla do...while */

/*
var i;
do {
    //losowanie od 1 do 10
    i = Math.floor((Math.random() * 10) + 1);
    console.log(i);
} while ( i != 6 );
*/

/* Przerywanie petli - break */

/*var a = 0;
while ( a < 10 ) {
    console.log(++a);
    
    if ( a == 5 ) {
        break;
    }
}*/

/* Przeskakiwanie do kolejnej iteracji - continue */

/*for ( var b = 0; b < 10 ; ++b ) {
    if ( b == 5 ) {
        continue;
    } else {
        console.log(b);
    }
    console.log("---");
}*/
// jeżeli i=0 to i++ zaczyna liczyć od jedynki, jezeli ++i zacznie od 0
var tablica = [1,null,'Ala',3, 5, 6];
for (var i=0; i<tablica.length; i++) {
    //console.log(tablica[i]);
    
    if(typeof tablica[i] != 'number') {
        continue;
    } else {
        console.log(tablica[i]);
    }
}