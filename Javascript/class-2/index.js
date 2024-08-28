// var, let and const -  keywords

// let and const (Recommended)
// Javascript synchronous and single-threaded

// If you want to access a value then you need to declare that first.

// console.log(name); // undefined
// console.log(age); // ReferenceError: Cannot access 'age' before initialization
// console.log(city);

var name = "Pramod";
let age = 25;
const city = "Bhubaneswar";


console.log(name); // Pramod

// Hoisting:
// var and function declarations are hoisted to the top of the scope.
// var: are hoisted and initialized with undefined.
// let and const are not hoisted to the top of the scope, not initialized, causing a temporal dead-zone(TDZ).

// TDZ is the region between the point at which a variable is declared and the point at which
// the variable is initialized. If you try to access a variable in the TDZ, you will
// get a ReferenceError.