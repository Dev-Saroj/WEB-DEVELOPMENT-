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
//// todo: Do the above task and upload it in github then share me the link in the group.

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

// BigInt
//BigInt is a primitive data type in javascript.It is used to represent a whole number that is 
//Larger than the maximum limit of the Number data type. It is used to represent larger integers.

let bigInt = 10000000000000000000000000000000000000000000000000000000000000000000000000;
// console.log(bigInt); //1e+73

// Symbol :
// Symbol is a primitive data type in JavaScript. It is used to create a unique identifier for an
// object's property. It is used to prevent property name collisions.

let symbol1 = Symbol("abc");
let symbol2 = Symbol("abc");
// console.log(symbol1); // Symbol(abc)
// console.log(symbol2); // Symbol(abc)
// console.log(symbol1.description); // abc
// console.log(symbol2.description); // abc
// console.log(symbol1 === symbol2); // false

// NaN : Not a Number
// NaN is a primitive data type in JavaScript. It is used to represent a value that is not
// a number. It is used to represent the result of a mathematical operation that cannot be
// performed.

let num3 = 10 / 0;
// console.log(num3); // NaN / Infinity

// Boolean :
// Boolean is a primitive data type in JavaScript. It is used to represent a logical value that
// can be either true or false.

let boolean1 = true;
let boolean2 = false;
// console.log(boolean1);
// console.log(boolean2);

let boolean3 = " ";
// boolean3 ? console.log("true") : console.log("false");

// String :
// String is a primitive data type in JavaScript. It is used to represent a sequence of characters.
// collections of characters.
// It is used to represent text data.

// How to define
// 1. Using single quotes
let str1 = "Hello, World!";
// console.log(str1);

// 2. Using double quotes
let str2 = "Hello, World!";
// console.log(str2);

// 3. Using backticks (template literals)
let str3 = `Hello, World!`;
// console.log(str3);

// 4. Using new String()
let str4 = new String("Hello, World!");
// console.log(str4);

// My Details :
// Name : saroj
// Age : 22
// Address : Bhubaneswar
// Contact : 1234567890

let name = 'Saroj';
let age = "22";
let address = "Bhubaneswar";
let contact = "1234567890";

console.log(name);
console.log(age);
console.log(address);
console.log(contact);

console.log("My details :", name, age, address, contact); // My details : Saroj 22 Bhubaneswar 1234567890
console.log("My details:" + name + age + address + contact); // My details:Saroj22Bhubaneswar1234567890
console.log(
  `My name is ${name}, my age is ${age}, my address is ${address} and my contact no is ${contact}`
);

// My name is Saroj, my age is 22, my address is Bhubaneswar and my contact no is 1234567890

// Fun fact :
let score1 = "100";
let score2 = 200;

let number = "Saroj";
console.log(typeof number); // string

let string = 5.23;
console.log(typeof string); // number

let name_string = "Pablo";
// length: 5
// Start-index: 0
// Last-Index = 5 - 1 = 4
console.log(name_string.length); // 5
console.log(`Last index: ${name_string.length - 1}`); // Last index: 4
console.log(name_string[2]); // b
console.log(name_string[4]); // o
console.log(name_string[name_string.length - 1]); // o
console.log(name_string.toUpperCase()); // PABLO
console.log(name_string.__proto__); // {}
console.log(name_string.__proto__.__proto__); // {}
console.log(name_string.charAt(2)); // b
console.log(name_string.indexOf("o")); // 4

const url = "sarojroul.github.io";
console.log(url.replace(".", "-")); // sarojroul-github.io
const email = "saroj@gmail@yahoo@ios.com";
console.log(email.replace("@", ".")); // saroj.gmail@yahoo@ios.com

const mail = "sarojroul.com";
console.log(mail.includes(".com")); // true
console.log(mail.includes("@yahoo")); // false

const company_name = new String("WeCode");
console.log(company_name); // [String: 'WeCode']




