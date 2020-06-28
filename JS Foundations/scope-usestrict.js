// JS has golabal environment leakage for variable without definition usage
function printName(){
  name = "ahmet"; // normally it should give , not defined error but in JS this variable supposed that you defined in global to prevent thi 'use strict' method
  console.log(name);
}

// Not to be leakage 
'use strict'
function printHeight(){
  height = "180";
  console.log(height); // it returns a variable is not defined error thanks to 'use strict'
}

/*
* [[Scopes]] it is a variable that keeps scope of the created function
*/
printName: ƒ giveName()
arguments: null
caller: null
length: 0
name: "printName"
prototype: {constructor: ƒ}
__proto__: ƒ ()
[[FunctionLocation]]: VM221:1
[[Scopes]]: Scopes[2]
0: Script {animations: {…}, customize: {…}, ntpApiHandle: {…}, doodles: {…}, iframesAndVoiceSearchDisabledForTesting: false, …}
1: Global {parent: Window, opener: null, top: Window, length: 4, fr...
