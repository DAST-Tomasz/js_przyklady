'use strict';

var jsonOsoby = {
    "osoby": [
        {imie: "Krystian", nazwisko: "Dziopa", wzrost: "180", oczy: "niebieskie", zainteresowania: [ {nazwa: "podroze"}, {nazwa: "gotowanie"}] },
        {imie: "Kasia", nazwisko: "Zając", wzrost: "170", oczy: "zielone"},
        {imie: "Łukasz", nazwisko: "Badocha", wzrost: "170", oczy: "duże"}
    ]
}


jsonOsoby.osoby.forEach(function(element, index){
    

    console.log("Pracownik " + (index+1) + ' ma na imie ' + element.imie);
    
})

var jsonPracownicy = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"},
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

jsonPracownicy.pracownicy.forEach(function(element, index){
    
    console.log((index) + " - " + element.firstName + " " + element.lastName);
})

var jsonLiczby = {
    "liczby": [
        {parzysta: "2, 4, 6, 8, 10"},
        {nieparzysta: "1, 3, 5, 7, 9"}
    ]
}

jsonLiczby.liczby.forEach(function(element, index){
    
    
    
})

