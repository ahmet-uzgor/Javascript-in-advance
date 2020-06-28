// function currying via bind()
function multiply(a, b){
    return a*b
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4), 'It gives 4 multiply by 2 result'); //currying via bind();

// currying version of same func.
function curryMultiply(a){
    return function (b){
        return a*b;
    }
}

let curryMultiplyByTwo = curryMultiply(2);
console.log(curryMultiplyByTwo(4), 'It gives 4 multiply by 2 result'); // Currying