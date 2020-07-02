// Fuctional programming examples
// No side effects mean input --> output In each time if input same , output should be same
// Immutability => Without changing state just copy same state and clone to another state 
const obj1 = {name: 'Ahmet', surname: 'Üzgör', age: 24};
function vlone(obj){ // It clones given object and returns a new copy of given object
    return {...obj};
}


// Closure provides us to use variables that is lexiacally scopped to anywhere we want
const closure = () => {
    let count = 0;
    return function increment(){
        count++;
        return count;
    }
}

const increasedCount = closure(); // It provides to us to reach variable which is lexically scopped at anywhere
console.log(increasedCount());
