/*
Exercise-6: Write down this function takes in one parameter (an array) and returns the last value in the array
It should return undefined if the array is empty.
N.B: count last element index dynamically :
lastElement([1,2,3,4]); // 4
lastElement([1,2,3,10]); // 10
lastElement([1,2,3,'hi']); // 'hi'
lastElement([]); // undefined

*/

function lastElement(num) {
    if (num.length===0) {
        return undefined; 
    }
    return num[num.length-1]
}
console.log(lastElement([1, 2, 3, 4])); 
console.log(lastElement([1, 2, 3, 10])); 
console.log(lastElement([1, 2, 3, "hi"])); 
console.log(lastElement([]));  