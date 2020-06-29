// If a function takes another function as parameter and return function, it is higher
// order function . It provides more dynamics and flexibility and efficiency to function workings

// For example a login authentication function for a company should be primitively & UNefficient code
function letLoginUser(name){ // For normal users
    let authArray = [];
    for (let i = 0 ; i < 1000000 ; i++){ // Similar process time for authentication just comparison
        authArray.push(i);
    }
    return 'Access granted to' + name;
}

function letAdminUser(adminName){ // for admin Users
    let admArray = [];
    for (let i = 0 ; i < 5000000 ; i++){ // Similar process time for authentication just comparison
        admArray.push(i);
    }
    return 'Access granted to' + adminName;
}

// it can be increased for each category but this is very unefficient code
// So to be able to make efficient, dynamic and flexible we will use Higher Order Func.

const giveAccessTo = (person) => {
    person.isAuthenticated = true;
    return `Access granted to${person.name}`;
}

function authenticate(person){
    let array = [];
    for (let i =0 ; i < person.authenticationTime; i++){
        array.push(i);
    }
    return giveAccessTo(person);
}

function letPerson(person, fn){
    if (person.level === 'admin' && person.isAuthenticated === true){ // it can do via authentication
        return fn(person);
    }else if (person.level === 'user' && person.isAuthenticated === true){
        return fn(person);
    }else {
        return `${person.name} is failed`
    }

}

function IncreaseSalary(person){
    return ` ${person.name} salary is increased`;
}

let person1 = {level: 'user', name: 'Ahmet', isAuthenticated: false}
console.log(letPerson(person1, IncreaseSalary)); // it authenticates and if authentication is successfull it Increase Salary