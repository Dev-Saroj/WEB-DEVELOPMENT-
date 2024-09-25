// De-structuring:
// De-structuring is a process to extract the values of an array and object and re-assign them into a new variables.
// It is the short-hand way to assign the value of an array or object to variables.


// example :
// 1. De-structuring of an array 
let cars = ["Honda" , "Honda", "Honda", "Honda", "Honda"];
// console.log(cars);
// console.log(car[2]); 
// let audi = cars[2]; //Audi 
// console.log(audi);
// let bmw = cars[1]; //BMW
// console.log(bmw);

// let [a,b,c,d] = cars;
// console.log(a);
// console.log(b);
// console.log(honda);
// console.log(bmw);
// console.log(audi);
// console.log(ferrari);\

// Skipping elements
// We can skip elements in an array while de-structuring by using `commas`.
// let [, , audi, ferrari] = cars;
// console.log(audi);
// console.log(ferrari);

// 2. De-structuring of an object
// let person = {
//   name: "John",
//   age: 25,
//   occupation: "Software Engineer",
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     state: "NY",
//   },
// };
// console.log(person);
// console.log(person.name);
// console.log(person.occupation);
// console.log(person.address);

// let { name, age, occupation, address } = person;
// console.log(name);
// console.log(age);
// console.log(occupation);
// console.log(address);
// let { street, city, state } = person.address;
// console.log(street);
// console.log(city);
// console.log(state);

// Spread operator :
// The spread operator is used to spread the elements of an array or props in an object or function arguments.
// It is denoted by `...` three dots.
// Spread operator is used to create or make a copy of an array or object.

// Examples :
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [...arr1]; // instances copy
// console.log(arr2);

// Merging
// let arr3 = [...arr1, 6, 7, 8, 9];
// console.log(arr3);

// Object instances
// let obj1 = {
//   name: "Pablo",
//   age: 50,
//   address: "Russia",
// };

// let obj2 = { ...obj1 };
// console.log(obj2);

// Merging
// let obj3 = { ...obj1, occupation: "Bussiness" };
// console.log(obj3);

// Rest operator :
// The rest operator is used to get the rest of the elements of an array or object into a single array or object.
// It is denoted by `...` three dots.
// It is used to pass variable number of arguments to a function.

// Examples :
// Getting the rest of elememts in array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let [first, second, ...rest] = numbers;
// console.log(first);
// console.log(second);
// console.log(rest);

// Getting the rest of elememts in object
let object = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let { a, b, ...rest } = object;
console.log(a);
console.log(b);
console.log(rest);
 





