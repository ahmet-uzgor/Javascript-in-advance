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

// AMD syntax Example
define(['module1','module2'],
    function(module1Import, module2Import) {
    'use strict';
    const module1 = module1Import;
    const module2 = module2Import;

    function dance(char){
        console.log(`${char.name} is dancing on the floor`)
    }

    return {
        dance: dance
    }
    }
);