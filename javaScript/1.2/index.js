// 1. Which of the following is/are strings?
// c) '4'

// 2. Which of the following is/are numbers?
// a) 4
// b) 4.0
// d) -4

// 3. Which of the following is/are booleans?
// a) true
// b) false

// 4. What is the result of 80 + 71.2?
// a) 151.2

// 5. What is the result of "80" + 71.2?
// c) "8071.2"
console.log("80"+71.2);
console.log(typeof("80"+71.2));
// 6. Does 100 + 30 produce a number or a string?
// a) number

// 7. Does "100" + 30 produce a number or a string?
// b)string

//create three different ways to declare variables
var way1;
let way2;
const way3=1;
//declare a variable and reassign a value to it
let variable;
variable=3;
//create a variable and after that assign a string
// with its value being: He's got it!
let string1;
string1="He's got it!";

// 1. create a variable and assign a value on how
// much a restaurant bill is.
let bill= 22;
// 2. create a variable and assign a value on how
// much tax they should pay.
let tax= 0.1;
// 3. create a variable that will calculate the bill
// * tax and its output would be: Your total bill is
// <total bill> $.
let total= `total bill ${bill+bill*tax}$`;
console.log(total);
// // Round the number 50.6 to its nearest integer
console.log(Math.round(50.6));
// //Create a variable that is undefined
let undef;