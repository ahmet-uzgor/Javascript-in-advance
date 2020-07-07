const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/posts'
];

const promise = Promise.all(urls.map(async url => {
    const resp = await fetch(url);
    return await resp.json();
}))

promise.then(results => {
    for( let i= 0; i< results.length; i++){
        console.log(results[i])
    }
}).catch((error)=> console.log(error));