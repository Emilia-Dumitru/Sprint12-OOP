# Sprint12-OOP

Acest este Sprintul despre OOP.
Cuprins :
->Ce se intelege prin OOP?
->Incapsulare
->Context
->Bind 
->This in arrow function 
->Constructor
->Prototipuri
->Boxing
->Metoda toString 
->Clasa

Modern JavaScript: Extending Classes
JavaScript classes can extend (inherit from) other classes by declaring class MySubclass extends MySuperclass. The subclass will have all of the properties and methods of the superclass, and can also define its own properties and methods. (You might hear these referred to as "child" and "parent" classes.)

The superclass and subclass can define their own separate constructors. That lets us centralize shared setup code in the superclass, avoiding duplication in its subclasses. The subclass' constructor calls the superclass' constructor with super(), passing whatever arguments the superclass' constructor requires.
>
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name + ' the cat');
  }
}

new Cat('Ms. Fluff').name;
RESULT:
'Ms. Fluff the cat'