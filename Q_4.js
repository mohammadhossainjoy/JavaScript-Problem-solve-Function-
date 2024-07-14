/*
Exercise-4:  Write a function that takes a value as argument and return the type of value
myFunction(1) //'number'
myFunction(false) //'boolean'
myFunction({}) // 'object'
myFunction(null) // 'object'
myFunction('string') //'string'
myFunction(['array']) //'object'

*/

function myFunction(value) {
    return typeof value;
}

console.log(myFunction(1));
console.log(myFunction(false)); 
console.log(myFunction({}));
console.log(myFunction(null)); 
console.log(myFunction("string"));
console.log(myFunction(["array"]));