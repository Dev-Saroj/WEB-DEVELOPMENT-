// Function :
// Function is a reusable block of code to perform a particular task.
// It can take arguments and return values.
// Function can be defined inside or outside another function.
// Function can be passed as an argument to another function.
// Function can be called multiple times in a program.
// Function can be used to create a loop or recursion.
// Function can be used to create a class or object.
// Function can be anonymous(Without a name).
// Function can be used to create a closure.
// Function can be used to create a higher-order function.

// Syntax:
// function name(params) {
// code to be executed
// }

// Examples :
// function greetings() {
// To print
//   console.log("Hello, World!");
// }

// Call or invoke
// greetings(); // Output: Hello, World!

// Write a function to add two different numbers
// function add(num1, num2) {
//   console.log(The addition result is ${num1 + num2});
// }

// add(5, 8); // Call or invoke

// Default parameters

// let num1 = 5;
// let num2 = 4;
// let num3 = 7;
// let result = num1 + num2 + num3;

// function add(output = 0) {
//   console.log(The addition result is ${output});
// }

// add(result); // Call or invoke

// return keyword in a function :
// The return keyword is used to exit a function and return a value to the caller.

// Write a function to check  even number
// function isEven(num) {
//   if (num % 2 === 0) {
//     return "Even"; // stop the execution
//     console.log("Please start");
//   } else {
//     return "Odd";
//   }
// }

// isEven(8); // invoke or call
// console.log(isEven(-90));
// let output = isEven(25);
// console.log(output);

// IIFE(Immediately Invoked Function Expression)
// IIFE is a function that runs as soon as it is defined.
// It is used to create a scope for the variables and functions defined inside it.
// It is used to prevent the global namespace pollution.

// Syntax:
// (function() {
// code to be executed
// })();

// Example:
// (function () {
//   console.log("Hey , I am an IIFE");
// })();

// Scope :
// Scope is the region of the code where a variableis defined.
// A global variable can be accessible in block scope but a variable in block scope can't be accessible in global scope

// let z = 30; // global scope
// console.log(x + y + z);

// function scope() {
//   let x = 10; // block scope
//   let y = 20; // block scope
//   console.log(x + y + z);
// }
// scope();

// function secondOne() {
//   let w = 50;
//   console.log(w + z);
// }
// secondOne();

// Function hoisting
// Function hoisting is a JavaScript mechanism where functions are moved to the top of their scope.
// calling(); // undefined

// console.log(name); // wrong ReferenceError: Cannot access 'name' before initialization

// var name = "soumya";
// console.log(name); // correct

// function calling() {
//   return console.log("Hey someone is calling you");
// return "Hey someone is calling you";
// }

// calling(); // call or invoke
// console.log(calling()); // call or invoke
// let output = calling();
// console.log(output);

// ES6+
// Arrow function
// Arrow function is a shorthand for a function expression.
// It is a function that is defined using the arrow syntax.
// Arrow function is used to define small functions.

// student(); //  Cannot access 'student' before initialization

// let student = () => {
//   console.log("Hey students");
// };

// student(); // call or invoke

//  Task-1
// let sum = (num1, num2 = 8) => {
//   return num1 + num2;
// };
// let output = sum(5);
// console.log(output);

// function Person() {
//   this.name = "surya";
//   this.age = 23;
// console.log(this);
/// const person = new Person();
// console.log(person);

// this keyword :
// this keyword refers to an object which is currently execute a function.
// this keyword refers to the global window in traditional function.
// this keyword refers to an object in arrow function.

// Example:
// function calling() {
//   console.log(this);
// }
// calling();

// const hello = () => {
// console.log(this);
// };
// hello();

// const person = {
//   name: "Pablo",
// greet: function () {
// Function is methods.
// console.log(this.name);  // Here this refers to an object.
// },
//   greet: () => {
//     console.log(this.name);   // Here this doesnot refers to an object.
//   },
// };
// person.greet();

// Constructor() :
// A constructor() is a function to create new objects using new keyword.

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const person1 = new Person("Suryasnata", 23);
// const person2 = new Person("Swikruti", 30);
// const person3 = new Person("Soubhagya", 25);

// console.log(person1);
// console.log(person2);
// console.log(person3);

// callback() :
// A callback() is a function that is passed as an arguement in an another function.

// function car(name) {
//   console.log(Hey i am ${name});
// }

// function model(callback) {
//   const name = "Harrier";
//   callback(name);
// }
// model(car);

// function hello(name, x) {
//   console.log(Hello i am ${name});
//   x();
// }

// function bye() {
//   console.log(Bye);
// }

// hello("Subhasmita", bye);

// Clouser
// A clouser is a function that basically remembers it's outer function variable even after the outer function returned.

// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// console.log();
// }

// let increment = counter(); // call or invoke
// increment(); // call or invoke

// Promise
// A promise is a result of an operation that hasn't completed yet, but is expected to resolve
// with a value at some point in the future. It's used to handle asynchronous operations in JavaScript

// A promise has 3 states
// 1. Pending
// 2. Fulfilled
// 3. Rejected

// Example:
// let state = false;
// const promise = new Promise((resolve, reject) => {
//async operation/
//   if (state) {
//     resolve("Promise resolved");
//   } else {
//     reject("Promise rejected");
//   }
// });
// console.log(promise);

// Higher order function

// Double the value
const array1 = [1, 4, 9, 16];
// for (let i = 0; i < array1.length; i++) {
//   array1[i] = array1[i] * 2;
// console.log(array1);
// }
// console.log(array1);

// Find out odd number
// const array2 = [1, 4, 9, 16];
// for (let i = 0; i < array2.length; i++) {
//   if (array2[i] % 2 !== 0) {
//     console.log(The odd no: ${array2[i]});
//   }
// }

// Map:
// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

// const newArray = array1.map((el, i) => {
// console.log(el * 2);
//   console.log(i);
// return el * 2;
// });
// console.log(newArray);

// array1.map((el) => console.log(el + 1));

// Filter
// chars greater than 6
const words = ["spray", "elite", "exuberant", "destruction", "present"];
// const longWords = words.filter((word) => word.length > 6);
// console.log(longWords);
const filteredArray = words.filter((el, i) => {
  return el.length > 6;
});
console.log(filteredArray);

// Odd
const numbers = [1, 2, 3, 4, 5, 6];
const oddNumbers = numbers.filter((el, i) => {
  return el % 2 !== 0;
});
console.log(oddNumbers);


