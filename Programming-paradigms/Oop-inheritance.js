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

const fiona = new Warrior('Fiona', 'Sword');