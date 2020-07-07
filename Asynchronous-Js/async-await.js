const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/posts'
];

const getdata = async function() {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(async function(url){
            const response = await fetch(url);
            return response.json();
        }))
        console.log('users', users);
        console.log('albums', albums);
        console.log('posts', posts);
    } catch (err) {
        console.log('oooooopsss', err);
    }
}


// new ES9 feature ""for await of""
const getData2 = async function() {
    const arrayOfPromises = urls.map(myUrls => fetch(myUrls));
    for await ( let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}