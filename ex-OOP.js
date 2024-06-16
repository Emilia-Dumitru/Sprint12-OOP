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
        return `This is the car I want to buy: ${this.brand}, ${this.model}, ${this.color}, ${this.km} km`;
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