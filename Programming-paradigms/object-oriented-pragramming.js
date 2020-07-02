// It includes OOP example and explanations
// OOP needs to classes but to understand mentality we evaluate Constructor Functions Example
function Warrior(name, weapon){
    this.name = name;
    this.weapon = weapon;
}

const ahmet = new Warrior('Ahmet-10', 'Sword');
const summo = new Warrior('Summ-09', 'Poncikking'); // You are poncikked by Summ-09 :))

// new keyword creates Function constructor for these examples , Like below
/*const WarriorConstructor = Function('name', 'weapon', 
`   this.name = name;
    this.weapon = weapon;`); // It creates a Function object that has name & weapon as parameter
*/

Warrior.prototype.attack = function() {
    return `${this.name} attacked with ${this.weapon}`;
}; //It adds new feaure or function to directly Warrior construction

//console.log(summo.attack());

/**
* OOP with classes that comes with ES6
*/

class WarriorClass {
    constructor(name, weapon){ // It instantiate the features of class
        this.name = name;
        this.weapon = weapon;
    }
    attack(toWhose) {
        return `${this.name} attacked with ${this.weapon} to ${toWhose.name}`;
    }
}

const summis = new WarriorClass('Summi-09', 'Poncikkos');
const ahmet2 = new WarriorClass('Ahmett-10', 'Sword');
console.log(ahmet2 instanceof WarriorClass); // it returns answer of Is ahmet instance of WarrioClass
console.log(summis.attack(ahmet2));