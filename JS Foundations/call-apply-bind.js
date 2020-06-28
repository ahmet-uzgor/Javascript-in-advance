// In this section call(), apply() and bind() function benefits will be explained
// Normally invoke a function via toString() => equals toString.call()
// Also via apply you can invoke a function like toString.apply()
// The difference between this two method is :
function multiply(a, b){
    return a*b;
}

multiply.call(this, 5, 40); // it takes thiArgument and other arguments via commas
multiply.apply(this, [5,40]); // Apply takes thisArgument and other datas by an array which is the
// difference between apply & call method

//Bind also can invoke a function but it returns function as result
let multiplicate = multiply.bind(this, [5,40]); // it returns funstion of the result of given function to use later
multiplicate(); // You can use later when it needed

// All of them can invoke function . Call & apply directly invoke function
// Bind is invoke function and return result as function to be able to use later when it need