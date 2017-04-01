'use strict';

/* Obiekty jako zmienne */

var student = {
    imie: "Kaja",
    wzrost: 152,
    wyswietlDane: function() { console.log("Student ma na imie " + this.imie + " i ma " + this.wzrost + "cm wzrostu"); 
    }
}

student.wyswietlDane();
console.log(student.wzrost);

