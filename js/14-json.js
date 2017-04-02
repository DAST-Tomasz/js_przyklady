'use strict';

var jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian",
            nazwisko: "Dziopa",
            wzrost: "180",
            oczy: "niebieskie",
            zainteresowania: [{
                nazwa: "podroze"
            }, {
                nazwa: "gotowanie"
            }]
        },
        {
            imie: "Kasia",
            nazwisko: "Zając",
            wzrost: "170",
            oczy: "zielone"
        },
        {
            imie: "Łukasz",
            nazwisko: "Badocha",
            wzrost: "170",
            oczy: "duże"
        }
    ]
}


jsonOsoby.osoby.forEach(function (element, index) {


    console.log("Pracownik " + (index + 1) + ' ma na imie ' + element.imie);

})

var jsonPracownicy = {
    "pracownicy": [
        {
            "firstName": "Krystian",
            "lastName": "Dziopa"
        },
        {
            "firstName": "Anna",
            "lastName": "Szapiel"
        },
        {
            "firstName": "Piotr",
            "lastName": "Żmuda"
        }
    ]
}

jsonPracownicy.pracownicy.forEach(function (element, index) {

    console.log((index) + " - " + element.firstName + " " + element.lastName);
})

// tablica
var liczby = [];

for  (var j = 0; j<=100; j++) {
    var rand = Math.floor(Math.random() * 100);
    liczby.push(rand);
}
//var liczby = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// petla ktora wypluje liczby parzyste i nieparzyste
for (var i = 0; i < liczby.length; i++) {
    if (liczby[i] % 2 == 0) {
        console.log(liczby[i] + ' jest parzysta');
    } else {
        console.log(liczby[i] + ' jest nieparzysta');
    }
    
    if (i == 10) break;
}

