"use strict"
// use strict : To enable strict mode in javascript, you can use the stict directive. This directive can be placed at the top of a script or funtion to opt-in to strict mode.

//conversion:
let score = "saroj"
//console.log(typeof score); //string

// 1. convert string string to number :
let converted_score = Number(score);
// console.log(converted_score); //NaN(Not a Number)

// 2. alternate method :
let converted_score2 = parseInt("score");
// console.log(converted_score2); // NaN(Not a Number is data type of Number)

let nums = "100"; // string
let converted_nums = parseInt(nums); // convert string to number
// console.log(typeof converted_nums); // number

// 3. alternate way :
let converted_nums2 = +nums;
// console.log(typeof converted_nums2); // number

// Task-1:
// let num = "123.45";
// Convert the above `num` to `Number` data type.

let num = "123.45"; // string
// console.log(typeof num); // string
let converted_num = Number(num); // convert string to number
// console.log(typeof converted_num); // number

let converted_nums3 = parseInt(num);
// console.log(typeof converted_nums3); // number

let converted_num4 = +num;
// console.log(typeof converted_num4); // number

// Convert Number to String :
let num1 = 123.45; // number

// console.log(typeof num1); // number
let converted_num1 = String(num1); // convert number to string
// console.log(typeof converted_num1); // string

// or
let converted_num2 = num1.toString();
// console.log(typeof converted_num2); // string

// or
let converted_num3 = num1 + ""; // concatenation
// console.log(typeof converted_num3); // string

// Fun :
let num5 = 91;
let num6 = 21;
let num7 = "19";
// console.log(num5 + num6); // 112
// console.log(num5 + num6 + num7); // 11219

// Comparison :
console.log(2 > 1); // true
console.log(100 < 200); // true
console.log(100 > 200); // false
console.log(2 == 1); // false
console.log(2 === 4); // false
console.log(2 == "2"); // true
console.log(2 === "2"); // false (Recommended)
console.log("000002" > 0.0001); //true
console.log(null > 0); // false
console.log(null === 0); // false
console.log(null == 0); // false