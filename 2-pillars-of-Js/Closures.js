// One of 2 pillars of JS is Closures and other is Prototypal Inheritance
// The answer of why we are using closure is that when we use higher order function 
// which is function returns functions , and to make dynamic lexical scope where we write
//  the function matters not where we call the function or where we invoke.
// It means we can use the variable which is out of scope.For Example:

/**
 * 1-) Memory Efficiency 
 */
function boo(string){
  return function(name){
    return function(name2){
      console.log(` ${string} ${name} ${name2}`);
    }
  }
}

boo('hii')('ahmet')('love'); 
// It invokes all function respectively 

// or
let closureFunc1 = boo('hii'); // it provides funvtion with "string" variable
let closureFunc2 = closureFunc('ahmet') // it provides function with "both string & name" variable
let closureFınc3 = closureFunc2('love') // it provides function with all string - name - name2 variables

/**
 * Encapsulation
 */
