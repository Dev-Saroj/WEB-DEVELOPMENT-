"use strict";

// console.log(name);
// var name = "Pramod";

let name; // Decalration  of variable
name = "Pramod"; // Initialization
// console.log(name); // undefined

// Null :
// Null is a primitive data type in JavaScript. It is used to represent the intentional absence of any
// object value. It is not the same as undefined. Null is a value that is assigned to
// a variable when it has been declared but has not been assigned any value.

let name1 = null;
name1 = "Pablo";
// console.log(name1); // null

// Undefined :
// Undefined is a primitive data type in JavaScript. It is used to represent the absence of any object
// value. It is not the same as null. Undefined is a value that is assigned to a
// variable when it has not been declared or has been declared but has not been assigned any value.
// It is also assigned to a variable when it is declared but has not been initialized.

let name2; // not defined !== undefined
// console.log(name2); // undefined

// console.log(name3); // ReferenceError:  not defined

// Number :
// Number is a primitive data type in JavaScript. It is used to represent a numeric value.
// It can be a whole number or a decimal number.

let num = 100;
// console.log(num); // 100

let Num = 9;
// console.log(Num); // 9

// Num !== num (case sensitive)

let decimal_no = 0.0001;
// console.log(decimal_no); // 0.0001

// How to check data types ?
console.log(typeof decimal_no); // number

// Task-1:
// Do mathematical operations to perform addition, subtraction, multiplication and divison using "number" data types in js.

// Addition :
let num1 = 400;
let num2 = 200;
let addition_result = num1 + num2;
console.log(addition_result); //600

//substraction:
let num3 = 10;
let num4 = 5;
let substraction_result = num3 - num4;
console.log(substraction_result); //5

//multiplication:
let num5 = 6;
let num6 = 10;
let multiplication_result = num5 * num6;
console.log(multiplication_result); //60

//Divison:
let num7 = 60;
let num8 = 5;
let divison_result = num7 / num8;
console.log(divison_result); //12
