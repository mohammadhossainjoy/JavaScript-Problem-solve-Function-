//Exercise-1: When and why function is needed?

/*
Answer:
Functions are needed in programming for several reasons, and their usage offers multiple benefits:
Code Reusability: Functions allow you to write a piece of code once and reuse it wherever necessary. This reduces redundancy and makes your code more efficient.
Scalability: Functions make it easier to scale your code. As your program grows, you can add more functions to handle new features or operations without affecting the existing code.
Ease of Testing: Functions can be individually tested for correctness. Unit testing becomes simpler when your code is divided into smaller functions, as you can isolate and test each part of your program.
Maintainability: Functions make your code more maintainable. Changes in requirements or logic can be managed more easily by updating specific functions rather than modifying the entire codebase.
Improved Readability: Well-named functions make your code more readable. They can serve as documentation, explaining what a particular block of code is supposed to do, which helps other developers (or your future self) understand the code quickly.

*/

//Exercise-2: write down and recap the difference between console and Return?


/*
Answer:
differences between console and return statement in programming:
Console Output (Printing)
Purpose: Primarily used for displaying information to the user or for debugging purposes.
Visibility: The output is visible immediately in the console or terminal where the program is running.
Persistence: The printed output does not affect the flow of the program; it is a one-time action that displays information.
Usage: Often used with functions like print() in Python, console.log() in JavaScript, or System.out.println() in Java.
Scope: The printed output cannot be used directly in the code following the print statement; it is meant for human reading.
*/
function person(name) {
    console.log(`Hello, ${name}!`);
}

person("MH Joy");  

/*
Return Statement
Purpose: Used to send a value back from a function to the caller, allowing the program to use the result of a function.
Visibility: The returned value is not automatically visible; it needs to be captured and used within the program.
Persistence: The returned value can be stored in a variable, passed to other functions, or used in further computations.
Usage: Used with the return keyword in many programming languages, such as Python, JavaScript, and Java.
Scope: The returned value can be used by other parts of the program, making it an integral part of the program’s logic and flow.
*/
function add(a, b) {
    return a + b;  
}

let result = add(5, 3);  
console.log(result);  
