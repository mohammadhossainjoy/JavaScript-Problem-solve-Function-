/*
Exercise-5: Write Down this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is saturday, 2 is Sunday, 3 is Monday etc.). If the number is less than 1 or greater than 7, the function should return undefined; Hint: you can use array to track down day of the week:)
printDay(4); // "Tuesday"
printDay(7); // "Friday"
printDay(41); // undefined
*/

function printDay(num) {
    const daysOfWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "thursday", "Friday"]
    
    if (num < 1 || num > 7) {
        return undefined;
    }
    return daysOfWeek[num - 1];
}

console.log(printDay(4)); 
console.log(printDay(7)); 
console.log(printDay(41));