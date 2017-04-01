/*

Typ liczbowy (w brackets jest zielony)

*/

var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);

/*

Typ - łańcuch znaków - string (w brackets jest pomarańczowy)
nazewnictwo zmiennych jest dowolne
*/

var wyplataStr = "Ala \n ma \"kota\", a kot ma Ale";
var premiaStr = "";
var calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + premiaStr;

// typeof pokazuje typ zmiennej
// Ala ma kota
console.log(calkowitaWyplataStr);

//UpperCase
var nowyString = calkowitaWyplataStr.toUpperCase();

//trim
var nowyString = calkowitaWyplataStr.trim();

//split
var nowyString = calkowitaWyplataStr.split(",");

console.log(nowyString);

/* Typ logiczny - boolean */

var czyJestSmog;
czyJestSmog = false;

if (czyJestSmog) {
    console.log("Jest smog");
} else {
    console.log("Nie ma SMOGa ;)")
}

/* Typ specjalny - undefined / null */

var niezidentyfikowanaZmienna;
var nullowaZmienna = null;

console.log(niezidentyfikowanaZmienna);
console.log(typeof nullowaZmienna);

/* Typ tablicowy - Arrays */

var imiona = new Array();
var imionaStudentow = new Array(9);
var imionaChlopakow = new Array ('Mateusz', 'Michał', 'Krzysiek', 'Sergio');

imionaStudentow[2] = "Przemek";

console.log(imiona);
console.log(imionaStudentow);
console.log(imionaChlopakow);

var wiek = [];
var wiekStudentow = [20, 25, 28];

console.log(wiek);
console.log(wiekStudentow);

/* Typ obiektowy - object - jako zmienna */

