const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/posts'
];

const promise = Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
}))

promise.then(results => {
    for( let i= 0; i< results.length; i++){
        console.log(results[i])
    }
}).catch((error)=> console.log(error));