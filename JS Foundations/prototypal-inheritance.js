// It includes __proto__ , Prototypal chains , Protoypal Inheritance subjects

// Arrays -- Functions are also objects and take features from object as prototypal inheritted
const a = []; 
a.__proto__ ; // it gives whole prototypal features od array 
a.__proto__.__proto__ ; // It gives prototypal features of its master (Objects)

// It is same as function 


/**
 * Example of prototypal inheritance
 */
let dragon = {
    name: "Summo",
    fire: true,
    fight(){
        return 5
    },
    sing() {
        if (this.fire){
            return `I am ${this.name} , the breather of fire`
        }
    }
}

let lizard = {
    name: 'Ahmet',
    fight (){
        return 1;
    }
}

lizard.__proto__ = dragon; // It adds feature of dragon to prototypal chain for lizard
lizard.sing(); // If lizard has not sing func. it looks for prototypal chain and it goes to up
// and it will find sing() into dragon
dragon.isPrototypeOf(lizard); // It returns answer of Is dragon prototype of lizard .


// Property checking for objects

for (let prop in lizard){
    console.log(prop); // It lists all properties of lizard
}

// Also hasOwnProperty method
for (let prop in lizard){
    if (lizard.hasOwnProperty(prop)){ // it checks lizard has own property as given property
        console.log(prop);
    }
}