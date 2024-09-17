// Array:
// An array is a data structure in JS that allows you to store multiple values in a single variable name.
// These value can be any type(Number , string , Object and etc...)

// Indexed: Each element is assigned to a numeric value (Index) and it always starts from 0.
// Mutable: It can be changed or modified.
// Ordered: Elements are stored in a specific order.
// Homogeneous or Heterogeneous: Array can be hold same data type or different data type.
// Symbol: []
// separated by ","

// Examples:

// Create an Array:
let arr = [1, 2, 3, 4, 5];
//let fruits = ["Apple","Mango","Orange"];
let mixed = [
    0.5,
    1.255,
    "saroj",
    "pillow",
    "India ",
    true,
    false,
    null,
    undefined,
];

// console.log(typeof arr);
// console.log(typeof fruits);
// console.log(typeof mixed);

// console.log( arr );
// console.log( fruits );
// console.log( mixed );/

// using new Array() constructor:
let arr1 = new Array(1, 2, 3, 4, 5);
console.log(arr1);

// length:
// The length property returns the number of elements in an array.
// It is a read-only property.
console.log(arr1.length); // 5

// Start index in arr1 - 0
// start element in arr1 - 1
// End index in arr1 - 4
// End elements in arr1 - 5
// What is the index value of elemet 3 - 2
// what is the element value at index 2 - 3
// what is the element value at index 4 - 5

// Accessing an element:
// we can access an element in an array using its index: [0]
// The index of the first element is '0'
// The index of the last element is 'length - 1'

console.log(arr1[0]); // 1

let fruits = ["Apple","Mango","Orange"];
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Orange 
// let lastIndex = fruits.length - 1
console.log(fruits[fruits.length - 1]); // Orange