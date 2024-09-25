// Control flow in js

// Truthy value : true, non-zero element(except zero), no-empty element, object, array
// Falsy value : false, 0, -0, empty element, null, undefined, NaN

// Conditional :
// Statements that are perform different actionsbased upon different conditions

// if (statement) {
// code to be executed if statement is true
// }

const obj = {};
const arr = [];
const num = 0;
const str = " ";

if (str) {
  //   console.log(`${str} is truthy`);
} else {
  //   console.log(`${str} is falsy`);
}

// Task-1:
// Write a code to check and print whether you are an adult or not
//e:g : 18+

let name = "Neha";
let age = 16;
if (age >= 18) {
//   console.log(`${name} is an adult`);
} else {
//   console.log(`${name} is not an adult`);
}

// Write a code to check and print the even number between 1 to 10

for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    // console.log(`${i} is even`);
  }
}

// Write a code to check and print the odd number between 1 to 10

for (let i = 1; i < 11; i++){
    if ( i % 2 !==0){
        console.log(i);
        
    }
}

// Write a code to check whether you are eligible for driving licence.
// Eligibility criteria : 18+ and not more than 60

// And operator :
// Both statement should be true.

// Or operator :
// Either statement should be true.

// let age = 60;
// let hasDl = true

// if (age < 18) {
//   console.log(`You are a minor hence you are not eligible`);
// } else if (age >= 18 && age < 60) {
//   console.log(`You are eligible`);
// } else {
//   console.log(`You are not eligible`);
// }

// Nested if condition :
// if (condition1) {
//   if (condition2) {
// code to be executed
//   }
// }

// let age = 18;
// let hasDl = false;

// if (age >= 18) {
//   console.log(`You are an adult`);

//   if (hasDl) {
//     console.log(`You can drive`);
//   } else {
//     console.log(`You cannot drive`);
//   }
// } else {
//   console.log(`You are a minor`);
// }

// Switch case :
// It is used to check the value of a variable and execute a block of code based on that
// value.
// It is used when we have multiple conditions to check.

// Write a code to print the current day of the week in switch statement

// let day = 0;

// switch (day) {
//   case 1:
//     console.log(`It's monday`);
//     break; // to stop the execution
//   case 2:
//     console.log(`It's tuesday`);
//     break;
//   case 3:
//     console.log(`It's wednesday`);
//     break;
//   case 4:
//     console.log(`It's thursday`);
//     break;
//   case 5:
//     console.log(`It's friday`);
//     break;
//   case 6:
//     console.log(`It's saturday`);
//     break;
//   case 7:
//     console.log(`It's sunday`);
//     break;
//   default:
//     console.log(`You have entered invalid inputs`);
//     break;
// }

// let grade = "A";
// let mark = 90;

// switch (grade) {
//   case "O":
//     console.log(`Outstanding`);
//     break;
//   case "A":
//     console.log(`Excellent`);
//     break;
//   case "B":
//     console.log(`Good`);
//     break;
//   default:
//     console.log(`You have entered invalid inputs`);
//     break;
// }

// Ternary operator(?) :
// It's introduced in ES6+
// It's a shorthand for if-else statement

let isSingle = true;

// if (isSingle) {
//   console.log("You are allowed to the bachlor club");
// } else {
//   console.log("You are not allowed to the bachlor club");
// }

let message = isSingle
  ? "You are allowed to the bachlor club"
  : "You are not allowed to the bachlor club";
// console.log(message);

// "" ? console.log(`You have something`) : console.log(`You have nothing`);

let number = -0;
let output = number ? "You are right" : "You are wrong";
console.log(output);

// -100 ? console.log(`You are right`) : console.log(`You are wrong`); 
