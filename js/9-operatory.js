'use strict';

var liczba1 = 13, liczba2 = 5;
var wynik;

wynik = liczba1 % liczba2;
console.log(wynik);

liczba1 += liczba2;
//to samo co liczba1 = liczba1 + liczba2;
console.log(liczba1);

// == - klasyczne rownasie matematyczne

var liczba3 = 4;
var liczba4 = 4;
if (liczba3 == liczba4) {
    console.log('liczby sa rowne');
} else if (liczba3 === liczba4) {
    console.log('liczby sa identyczne')
}

var liczba5 = 8;
if (liczba5 == 9 || liczba5%2 == 0) {
    console.log('Operatory logiczne');
}

(8>5) ? console.log("tak") : console.log("nie");