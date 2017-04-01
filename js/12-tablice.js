'use strict';

var imiona = ['Monika', 'Krystian', 'Łukasz'];
imiona[3] = 'Tania';
imiona[2] = 'Ela';

//console.log(imiona);

// push dodaje na końcu

imiona.push('Geralt');

// pop usuwa ostatni element - nie przyjmuje argumentow
imiona.pop();
imiona.pop();

// wstawia elementy na początku tabeli
imiona.unshift('Robert', 'Krzysztof');
// usuwa element z poczatku
imiona.shift();

console.log(imiona);
console.log(imiona.length); // typ number - pokazuje ile elementow jest w tablicy

/*for (var i = 0; i < imiona.length ; i++) {
    console.log("index: " + i + " wartość: " + imiona[i]);
}*/

/*imiona.forEach(function (element, i) {
  console.log('Element nr.' + index + ' = ' + element);  
})*/

// Metoda join
console.log(imiona.join(" + "));

// odwrotnie
console.log(imiona.reverse());

var imionaMeskie = ['Robert', 'Mateusz', 'Andrzej'];
var zbiorImion = imionaMeskie.concat(imiona);

// wyswietlenie pelnego, polaczonego zbioru imion z posortowaniem
console.log(zbiorImion.sort());
console.log(zbiorImion.indexOf("Mateusz"));
// czy dany obiekt jest tablica
console.log(Array.isArray(zbiorImion));

// pomiedzy 2, a 5
console.log(zbiorImion.slice(2, 5));

// wytnik od elementu 2 dwa elementy i stworz osobna tablice
console.log(zbiorImion.splice(2, 2));

// wytnij od elementu 2 i podmien te dwa wybrane
zbiorImion.splice(2, 2, "Julek", "Krzyś");
console.log(zbiorImion);


console.log(zbiorImion.toString());