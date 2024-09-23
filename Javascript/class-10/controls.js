// Control flow in js

// Truthy value : true, non-zero element, no-empty element, object, array
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
