// we have 7 types in JS
// number - boolean - string - undefined - null - Symbol - Object (Array & Functions are also object)

let myArray = [1, 2, 3];
typeof myArray; // it returns object because in JS func. and arrays are object
Array.isArray([1, 2, 3]) // it checks given parameter is array or not.
// To be able to chek array type in JS Array object has isArray method

// Pass by Value - Pass by Reference
// In JS it has 2 types of variables Primitve & Non-Primitive
// Primitives : number, string, boolean, undefined, null, symbol
// Non-Primitives : object - array - functions
// Primitive variables use pass-by-value method and copy value
// Non-Primitve variables use pass-by-reference method and take the address as reference

// Primitive types Pass-by-Value Example
let myNumber = 5;
let newNumber = myNumber;
myNumber = 7;
console.log(newNumber); // it returns 5 because primitive variables just copy the values 
// not the address so when myNumber changed it just affects myNumber because there is no 
// real connection or reference between both of them. Just it copied value and used.

// Non-Primitive types Pass-by-Reference Example
let obj1 = {
    name: "ahmet",
    surnmae: "üzgör",
    age: 24 
}

let obj2 = obj1 ;
obj1.age = 26 ;
console.log('object 2 ', obj2); // it returns {name: "ahmet", surname: "üzgör", age: 26 }
// Because when it equalize obj2 to obj1 it takes the address where data is located in memory
// so when any feature of obj1 changed it affect also obj2 because it refers also obj2.
