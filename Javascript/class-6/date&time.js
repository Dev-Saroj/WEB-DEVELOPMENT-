// Date in javascript
// Will work in date and time

// Current date and time ?
const currentDateTime = new Date(); // 2024-09-16T14:27:36.088Z
// console.log(currentDateTime);

// How to find date
// 1. getFullYear()
const year = currentDateTime.getFullYear(); // 2024
// console.log(year); // 2024
// 2. getMonth()
const month = currentDateTime.getMonth() + 1; // 9  [ 0 : Jnuary , 1: February ... ]
// console.log(month); // 9
// 3. getDate()
const date = currentDateTime.getDate(); // 16
// console.log(date); // 16

// How to find time
// 1. getHours()
const hours = currentDateTime.getHours(); // 20
// console.log(hours); // 20
// 2. getMinutes()
const minutes = currentDateTime.getMinutes(); // 8
// console.log(minutes); // 8
// 3. getSeconds()
const seconds = currentDateTime.getSeconds(); // 55
// console.log(seconds); // 55

// How to find day in a week
// 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday , 4 = Thursady, 5 = Friday, 6 = Saturday
const day = currentDateTime.getDay(); // 1
// console.log(day); // 1 Monday

// Specific date
// ISO Format: (YYYY-MM-DDTHH:mm:ss.sssZ) is the most common method used in the browser.
// Months are starting from "0" index
// Day in the week also starts from "0" index
const myDate = new Date(1998, 8, 21);
// console.log(myDate); // 1998-09-20T18:30:00.000Z
// console.log("1998-09-20T18:30:00.000Z");

// Custom date
// const myBday = new Date("MM/DD/YYYY")
// const myBday = new Date("08/21/1998");
myBday = new Date("08-21-1998");
// console.log(myBday); // 1998-08-20T18:30:00.000Z
// console.log(myBday.getDate()); // 21

// Long date
const longDate = new Date("August 21, 1998");
// console.log(longDate); // 1998-08-20T18:30:00.000Z
// console.log(longDate.toString()); // Fri Aug 21 1998 00:00:00 GMT+0530 (India Standard Time)
// console.log(longDate.toDateString()); // Fri Aug 21 1998
// console.log(longDate.toLocaleTimeString()); // 12:00:00 am

// Manipulate current date
// 1. add days
const addDays = currentDateTime.setDate(17);
// console.log(addDays); // 1726585680835
// 2. add month
const addMonth = currentDateTime.setMonth(10);
// console.log(addMonth); // 1731856080835
// 3. add year
const addYear = currentDateTime.setFullYear(2025);
// console.log(addYear); // 1731856080835

// Alternate method for adding days
const addDaysAlternate = new Date(currentDateTime.getTime() + 17 * 24 * 60);
// console.log(addDaysAlternate); // 2025-11-17T15:12:28.547Z
// console.log(addDaysAlternate.getDate()); // 17
// console.log(addDaysAlternate.getFullYear()); //  2025
// console.log(addDaysAlternate.getMonth()); // 10

// Or
let futureDay = new Date();
// console.log(futureDay.getDay()); // 1-  Monday
futureDay.setDate(futureDay.getDay() + 5);
// console.log(futureDay);
// console.log(futureDay.getDay()); // 5- Friday

// Find my current age
// const myAge = new Date().getFullYear() - myBday.getFullYear();
// console.log(myAge); // 26

// Diiference
const curr = new Date("2024-09-16");
const bday = new Date("1998-08-21");
// console.log(curr - bday); // 822787200000 /
// const age = Math.floor((curr - bday) / (1000 * 60 * 60 * 24));
// console.log(age);

// Task-1:
// Find the difference between two dates

const date1 = new Date("2024-09-17");
const date2 = new Date("2024-09-18");
const oneDay = 24 * 60 * 60 * 1000; // Hours * Minutes * Seconds * Milliseconds
const diffTime = Math.abs(date1 - date2);
const diffDays = Math.floor(diffTime / oneDay);
console.log(diffDays); // 1 day differnece

// Task2 :
// Find the difference between two different time zone

const time1 = new Date("2024-09-17T21:31:12");
const time2 = new Date("2024-09-17T22:31:12");

const differenceTimeMs = time2 - time1;
console.log(differenceTimeMs); // 3600000sec = 1hr
console.log(differenceTimeMs / (1000 * 60)); // 60min = 1hr
console.log(Math.abs(time1.getHours() - time2.getHours())); // 1hr

// Task3:
// Check wheather it is a past date or not
const currDate = new Date();
const pastDate = new Date("2024-09-15");
const isPast = pastDate < currDate;
console.log(isPast); // true

// Home Task:
// Task-1:
// Find the difference between current date and your dob in days



// Task-2:
// Add 10 days to the current date