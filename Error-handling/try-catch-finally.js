// It includes example of try-catch-finally error handling
function fail(){
    try {
        console.log('It succesfully worked');
        // throw new Error(''ooops) sample error throwing
    } catch (error){
        console.log(error.message)
    } finally {
        console.log('Finally block worked');
        return 'returning finally'
    }
}

fail();

// Promise error handling
Promise.resolve('async fail')
    .then(response => {
        return response
    })
    .then(response => {
        console.log(response)
        throw new Error('simple error');
    })
    .catch(error => {
        console.log(error)
    })