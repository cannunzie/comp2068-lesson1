// link to node's filesystem module to read text filesystem
var fs = require('fs');

// open and read food list
var food = fs.readFileSync('food.txt', 'utf-8');

// print a food heading and list of food
console.log('FOOD');
console.log(food);

// open and read drinks list
var drinks = fs.readFileSync('drinks.txt', 'utf-8');

// print a food heading and list of food
console.log('\nDRINKS');
console.log(drinks);