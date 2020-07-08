//IIFE
(function(){ // Immediately invoked function provides to clean global scope and give result to outside
    var harry = 'potter';
    var voldemort = 'he who must not be named';

    function fight(char1, char2){
        var attack1 = Math.floor(Math.random() * char1.length);
        var attack2 = Math.floor(Math.random() * char2.length);
        return attack1 > attack2? `${char1} wins` : `${char2} wins`
    }
    console.log(fight(harry, voldemort))
})()


// Module Pattern 
var fightModule = (function(){
    var harry = 'potter';
    var voldemort = 'he who must not be named';

    function fight(char1, char2){
        var attack1 = Math.floor(Math.random() * char1.length);
        var attack2 = Math.floor(Math.random() * char2.length);
        return attack1 > attack2? `${char1} wins` : `${char2} wins`
    }
    return { // It provides to reach outside of the function for returning parameters 
        fight: fight,
        harry: harry,
        voldemort: voldemort
    }
})()