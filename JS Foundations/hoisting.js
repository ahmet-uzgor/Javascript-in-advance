// Hoisting lifts up if code has "var" , or "function" keyword
// When it see var or function it sets as undefined parameter that written

/*
*Normal Code Block
*/
var name = "ahmet";

function printName(){
  console.log(name);
}
 
var name = "mehmet";
printName();

/*
* Execution with hoisting
*/

var name = undefined; //it sets firstly var and functions as undefined
function printName() = undefined;
var name = "mehmet"

function printName(){
  console.log(name); // it prints undefined because of hoisting
}

printName(); // it prints mehmet

