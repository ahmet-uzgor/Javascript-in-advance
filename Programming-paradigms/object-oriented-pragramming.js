// It includes OOP example and explanations
// Constructor Functions Example
function Warrior(name, weapon){
    this.name = name;
    this.weapon = weapon;
}

const ahmet = new Warrior('Ahmet-10', 'Sword');
const summo = new Warrior('Summ-09', 'Poncikking'), // You are poncikked by Summ-09 :))

// new keyword creates Function constructor for these examples , Like below
const WarriorConstructor = Function('name', 'weapon', 
`   this.name = name;
    this.weapon = weapon;`); // It creates a Function object that has name & weapon as parameter

    