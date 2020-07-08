// CommonJs and AMD 
// Nodejs is using commonjs as standard

// It is an import export standard
const module1 = require('module1');
const module2 = require('module2');

function fight(char1, char2){
    if(char2.length > char1){
        return 'youu winn'
    }
    return 'you lostt'
}

module.exports =  {
    fight : fight
}