'use strict';
//zmienne globalne
var imie;
//konwencja jest taka, że nazwy złożone powinny być nazywane w poniższy sposób - ma znaczenie wielkość litetr
var imieDamskie = "Kaja";
var wiek = 37;

var kolor = "czerwony";
imie = "Sergio";

//skrypty wykonują się po kolei więc wynik będzie Kaja, ponieważ poniższy warunek jest ostatni 
imie = imieDamskie;

//console.log(imie);
//console.log(kolor);
//console.log(wiek);

function wyswietlZmienna() {
// zmienne lokalne
    var imie = 180;
 //ta zmienna jest dostepna tylko i wylacznie w zasiegu tej funkcji (zmienna lokalna) - wszystko poza wyswietli sie - dlatego to co jest ponizej nie wyswietli sie. po usunieciu var ponizszego zmienna lokalna staje sie globalna.
    console.log(imie);
}

wyswietlZmienna();
console.log(imie);
