/*
Exercise-7: write a function that return a object based on passed arguments 
Returned object key must be x , y, z in order and value will be passed arguments order- 4 
createObj(1, 2, 3) //{x: 1, y: 2, z:3}
createObj('a','b', 'c') //{x: 'a', y: 'b', z:'c'}
createObj('ab','bc', 'ca') //{x: 'ab', y: 'bc', z:'ca'}
*/

function createObj(a, b, c) {
    return {
        x: a,
        y: b,
        z:c
    }
}
console.log(createObj(1, 2, 3)); 
console.log(createObj("a", "b", "c")); 
console.log(createObj("ab", "bc", "ca"));