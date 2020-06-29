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
