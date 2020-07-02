class Character {
    constructor(name, weapon){
        this.name = name;
        thia.weapon = weapon;
    }
    attack(){
        return `attack with ${this.weapon}`
    }
}

class Warrior extends Character {
    constructor (name, weapon, type){
        super(name, weapon); // It calls the super class which is class extended from
        this.type = type;
    }
}

class Wizard extends Character {
    constructor(name, weapon, color){
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return `${this.name} strongest fort in the world`
    }
}

const fiona = new Warrior('Fiona', 'Sword', 'Stronger');
const myWizard = new Wizard('Chormy', 'Dark magic', 'Black');