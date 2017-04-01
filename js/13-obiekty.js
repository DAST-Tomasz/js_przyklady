'use strict';

var kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe: function() {console.log(this.imie)}
}

var krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe: function() {console.log(this.imie)}
}

kaja.przedstawOsobe();
krystian.przedstawOsobe();

console.log(kaja.wzrost);
console.log(krystian.wzrost);

kaja.wiek = 15;

console.log(kaja.wiek);
console.log(kaja);

// klasa

// this jest potrzebne by odwoływac się do konkretnej instancji - Krystian

/*function Osoba(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wzrost;
    this.oczy;
    this.wyswietlInfo = function() {
        console.log("imie: " + this.imie + "\n" 
                    + "nazwisko: " + this.nazwisko + "\n"
                   + "wzrost: " + this.wzrost + "\n"
                   + "oczy: " + this.oczy);
    }
}

var krystian = new Osoba('Krystian', 'Dziopa');

krystian.wzrost = 180;
krystian.oczy = "niebieskie";
krystian.wyswietlInfo();*/


// zadanie

function Osoba(imie) {
    this.imie = imie;
    this.wzrost;
    this.waga;
    this.BMI = function() {
        return this.waga / Math.pow(this.wzrost, 2);
    }
    
}

var zygmunt = new Osoba('Zygmunt');
zygmunt.wzrost = 1.80;
zygmunt.waga = 87;
console.log(zygmunt.imie + " Twoje BMI to: " + zygmunt.BMI());