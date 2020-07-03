const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('It worked');
    } else {
        reject('Error, it broke');
    }
})

promise // Promise chain includes then and catch blocks . Only if block has an error catch works
    .then(result => result + '??' )
    .then(newResult => newResult + '!!')
    .catch(error => console.log(error))
    .then(result3 => console.log(result3));

// Multiple Promises wait until all of them resolved and then return result
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'In 100 ms resolved')
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'In 1000 ms resolved')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'In 3000 ms resolved')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'In 5000 ms resolved')
})

Promise.all([promise1, promise2, promise3, promise4])
    .then(values => console.log(values))
    .catch(error => console.log(error));