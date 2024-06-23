/*Declara o clasa prin care sa reprezinți obiectul numit Mașina. O mașină are următoarele proprietăți:
- `marca` (ex: Volvo, Mazda, Dacia)
- `model` (ex: XC-60, CX-5, BIGGSTER)
- `culoare` (ex Negru, Verde, Albastru)
- `kilometraj` (ex 234 000, 111 000, 20 000)
*/

//Declaram clasa si un constructor care le inițializează folosind this.
class Car {
    constructor(brand, model, color, km) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.km = km;
    }
    // Definește o metodă de tip `getter` numita `proprietati` care va returna proprietățile mașinii 
    get properties() {
        return `Car[brand=${this.brand}, model=${this.model}, color=${this.color}, km=${this.km}]`;
    }
}
let myFavCar = new Car('Volvo', 'XC-60', 'Black', 234000);
console.log(myFavCar.properties);

/*La final, definește separat o funcție numită main, in care se vor crea 3 instanțe ale clasei mașina folosind operatorul new. 
Fiecare instanță va fi memorata Într-o variabilă separată și va avea proprietăți diferite. 
Afișează proprietățile mașinilor instanțiate folosind getter-ul proprietati.
*/
function main() {
    const car1 = myFavCar;
    const car2 = new Car('Mazda', 'CX-5', 'Green', 111000);
    const car3 = new Car('Dacia', 'BIGGSTER', 'Blue', 20000)

    console.log(car1.properties);
    console.log(car2.properties);
    console.log(car3.properties);
}
main();

/*Definește încă o clasa numita `MasinaDeCurse`. 
Această clasă va moșteni clasa `Masina` definita la exercițiul 1, folosind cuvantul cheie `extends` si va avea un constructor in care 
se va apela `this.super()` (adica superconstructorul).
`MasinaDeCurse` va avea o metoda suplimentara numita `participaLaCampionat`, metoda ce va primi un 
parametru numit `pozitiaInCampionat` (un numar). 
Metoda va afisa “Am castigat locul ” urmat de valoarea parametrului `pozitiaInCampionat`. 
Metoda va verifica daca pozitiaInCampionat este un numar mai mare ca 0, iar in cazul in care numarul este mai mic sau egal cu 0, 
se va afisa mesajul “Nu am castigat niciun premiu”.
*/
class RacingCar extends Car {
    constructor(brand, model, color, km) {
        super(brand, model, color, km);
    }
    attendingToRace(position) {
        if (position > 0) {
            console.log(`I won ${position} place.`);
        }
        else {
            console.log("I didn't win any prize.");
        }
    }
}
const myRacingCar = new RacingCar('Porsche', '956', 'Red', '36000');
myRacingCar.attendingToRace(1);
myRacingCar.attendingToRace(10);
myRacingCar.attendingToRace(-4);





