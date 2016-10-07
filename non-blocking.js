// link to node's filesystem module to read text filesystem
var fs = require('fs');

// load food list asynchronously
var food = fs.readFile('food.txt', 'utf-8', function(err, food){
    if(err){
        console.log(err);
    }else{
        console.log(food);
    }
});

// print a food heading
console.log('FOOD');

// load drinks list asynchronously
var drinks = fs.readFile('drinks.txt', 'utf-8', function(err, drinks){
    if(err){
        console.log(err);
    }else{
        // print a food heading
        console.log('\nDRINKS');
        console.log(drinks);
    }
});