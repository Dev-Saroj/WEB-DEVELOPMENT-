// Iteration :

// What are loops ?
// Loops are used to execute a block of code repeatedly for a specified number of times.

// Types :
// 1. For Loop
// 2. While Loop
// 3. Do-While Loop

// for loop :
// It consists of three parts: Intialization, Condition, and Increment/Decrement.
// The initialization part is used to initialize the loop counter.
// The condition part is used to check whether the loop should continue or not.
// The increment/decrement part is used to increment or decrement the loop counter.
// The loop continues to execute until the condition becomes false.
// The loop counter is incremented or decremented after each iteration.

// Syntax:

// for (initialization; condition; increment/decrement) {
// code to be executed
// }

// Examples :
// 1. Print numbers from 1 to 5

for (let i = 1; i <= 5; i++) {
    // console.log(`The number is ${i}`);
  }
  
  // for (let i = 0; i <= 4; i++) {
  //   console.log(`The number is ${i}`);
  // }
  
  // for (let i = 0; i < 5; i++) {
  //   console.log("*");
  // }
  
  // 2. Print numbers from 10 to 1
  for (let i = 10; i >= 1; i--) {
    // console.log(i);
  }
  
  // While loop :
  // It consists of two parts: (Condition and Code)
  
  // Examples:
  // 1. Print your name 5 times
  
  // let i = 0; // Intialization
  // while (i < 5) {
  //   console.log("Pablo");
  //   i++;
  // }
  
  // Do-while loop :
  // It consists of two parts: (Condition and Code)
  
  // Examples :
  // 1. Print your name 5 times
  let i = 0; // Initialization
  do {
    console.log("Pablo");
    i++;
  } while (i < 5);
  
  // Task-1:
  // Print 1 to 5 random number using for loop
  
  // Step-1
  const randomNumber = Math.random();
  console.log(randomNumber);
  // Step-2
  let start = 1;
  let end = 5;
  // Step-3
  // const random = Math.floor(randomNumber * (end - start + 1)) + start;
  // Step-4
  for (let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * (end - start + 1)) + start); // randomly 1 to 5
  }



