// Object :
// An object is a collection of properties, where each property is defined as a key-value pair.
// The key is a string and the value can be any data type.
// In JavaScript, objects are written in curly brackets {}.
// Each key-value pair is separated by a comma.

// Syntax :
// Traditional method or object literal :

let array = ["Pramod", 25, "SDE-I", "Bhubaneswar", 1234567890];

// is it really meaningful .. ?

let object = {
  key1: "value1",
  key2: 2,
};

let person1 = {
  name: "Pramod",
  age: 25,
  role: "SDE-I",
  city: "Bhubaneswar",
  phone: 1234567890,
};

// const value = person.name;
// console.log(typeof value); // string

// console.log(person1);
// console.log(typeof person1); // object

// Using constructor method :
let person2 = new Object();
person2.name = "Pablo";
person2.age = 45;
person2.role = "Mafia";
person2.city = "Russia";
person2.phone = 1234567890;

// console.log(person2);

// Accessing object
// You can access the properties of an object using the `dot notation` or the `bracket notation`.

// Using dot notation:
// console.log(person1.name);
// console.log(person1.age);
// console.log(person2.name);

// Using bracket notation:
// console.log(person1["name"]);
// console.log(person1["age"]);

// Modify object:
// You can modify the properties of an object using the `dot notation` or the `bracket
// notation`

person2.name = "Thor";
// console.log(person2);

person2["age"] = 500;
// console.log(person2);

// Delete object:
// We can delete the properties of an object using the delete operator

delete person2.name;
// console.log(person2);

// Task1:
// Create an object called `person3` with the following properties: `name`, `age`,
// `role`, `city`, `phone` and modify the `name` and `age` then delete the `phone`.

let array = ["saroj", 23, "student", "Bhubaneswar", 9178911639];

  let person = {
    name: "saroj",
    age: 23,
    role: "student",
    city: "Bhubaneswar",
    phone: 9178911639,
  };
let person3 = new object();
person3.Name = "saroj";
person3.age = "23";
person3.role = "student";
person3.city = "bhubaneswar";
person3.phone = "9178911639";

// console.log(person3);

// Modify object:
person3.name = "Iron-man";
// console.log(person3);

person3[age] = 100;
// console.log(person3);

delete person3.phone;
// console.log(person3);


// Object keys:
// console.log(Object.keys(person1)); // [ 'name', 'age', 'role', 'city', 'phone' ]

// Object values:
// console.log(Object.values(person1)); // [ 'Pramod', 25, 'SDE-I', 'Bhubaneswar', 1234567890 ]

// Object entries:
// We can get both key and value
// console.log(Object.entries(person1));

// Object freeze:
Object.freeze(person2);
// console.log(person2);
// console.log((person2.name = "Pablo"));
// console.log(person2);
// console.log((person2["age"] = 30));
// console.log(person2); // { age: 500, role: 'Mafia', city: 'Russia', phone: 1234567890 }