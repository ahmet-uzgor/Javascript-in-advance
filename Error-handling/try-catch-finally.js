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