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

// Modify elements
// We can modify an element in an array using its index: [0] =.

// fruits[0] = "Grapes";
// fruits[1] = "Banana";
// console.log(fruits); // [ 'Grapes', 'Mango', 'Orange' ]

// Add elements into an array
// 1. Using `push()` method:
//   - It adds one or more elements to the end of an array.
//   - It returns the new length of the array.
//   - It mutates the original array.
//   - It does not return a new array.

let fruits = ["Apple", "Mango", "Orange"];
// fruits.push("Guava");
// fruits.push("Pineapple");
fruits.push("Guava", "Pineapple", "watermelon", "strawberry");
// console.log(fruits);

// 2. Using `unshift()` method
//   - It adds one or more elements to the beginning of an array.

fruits.unshift("litchi", "papaya");
// console.log(fruits);

// Remove elements of an array
// 1. Using `pop()` method
//   - It removes the last element of an array.
//   - It returns the removed element.
fruits.pop(); // strawberry
fruits.pop(); // watermelon
// console.log(fruits);

// 2. Using `shift()` method
//   - It removes the first element of an array.
//   - It returns the removed element.
fruits.shift(); // litchi
fruits.shift(); // papaya
// console.log(fruits);
// console.log(fruits.shift()); // Apple
// console.log(fruits);

// Array methods :
// Array.isArray()
// console.log(Array.isArray(fruits)); // true
// console.log(Array.isArray("kjhdhdilfjoi")); // false
// console.log(Array.isArray([])); // true

// Flat method :
// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

let mixedArray = ["Pramod", "Pablo", [25, 45], ["BBSR", "Russia"]];
// console.log(mixedArray);
// console.log(mixedArray.flat()); // [ 'Pramod', 'Pablo', 25, 45, 'BBSR', 'Russia' ]

// includes() :
// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// console.log(mixedArray.includes("Pramod")); // true
// console.log(mixedArray.includes("Soumya")); // false

//  reverse() :
// The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

const array1 = ["one", "two", "three", "four"];
const array2 = [1, 2, 3, 4, 5, 6];
// console.log(array1.reverse());
// console.log(array2.reverse());

// join() method :
// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const array3 = ["My", "name", "is", "Pramod"];
// console.log(array3.join()); // My,name,is,Pramod
// console.log(array3.join(" ")); // My name is Pramod
// console.log(array3.join("-")); // My-name-is-Pramod
// console.log(array3.join("_")); // My_name_is_Pramod

// Slice() method :
// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const array4 = [
  "My",
  "name",
  "is",
  "Pramod",
  "from",
  "cuttack",
  "and",
  "bhubaneswar",
];
// const newSliceArray = array4.slice(3);
// const newSliceArray = array4.slice(0, 6);
const newSliceArray = array4.slice(3, 6); // (startIndex: include, endIndex: Exclude)
// console.log(newSliceArray);

// splice() :
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// The array is modified in place, and the return value is an array containing the removed elements.
// Inserting or deleting elements(startIndex) in an array.
// splice(startIndex,DeleteCountValue,"item1","item2"...)

// Task-1:
// Delete B and C and replace with X and Y
const months = ["A", "B", "C", "D", "E", "F", "G"];
months.splice(1, 2, "X", "Y");
// console.log(months); //  ["A", "X", "Y", "D", "E", "F", "G"];
// Delete nothing add "U" and "V" in between "E" and "F"
// ["A", "X", "Y", "D", "E", "F", "G"];
months.splice(5, 0, "U", "V");
// console.log(months); //  ["A", "X", "Y", "D", "E", "U", "V" "F", "G"];
// ["A", "X", "Y", "D", "E", "U", "V", "F", "G"];
// Delete "D" and "E" and replace with "Z" and "Q"
months.splice(3, 2, "Z", "Q");
console.log(months);

// Sorting :
// Ascending Order :
const array5 = [5, 2, 8, 1, 9, 1000, 2.5, 5.0001, 0.000001];
// console.log(array5.sort());
console.log(array5.sort((a, b) => a - b));

// Descending Order :
console.log(array5.sort((a, b) => b - a));

// Ascending Order :
const array6 = ["A", "BC", "Pramod", "Pablo"];
console.log(array6.sort());

// Descending Order :
console.log(array6.sort().reverse());

// Or
console.log(array6.sort((a, b) => b.localeCompare(a)));