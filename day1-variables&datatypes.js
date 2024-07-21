// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var assignNumber = 2;

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let assignString = "String";

// Activity 2: Constant Declaration

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const assignBoolean = true

// Activity 3: Data Types

// Task 4: Create varibles of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

let number = 2;
let string = "string"
let boolean = false;
let obj = {
    objName : "name",
    dataTypeIn : "JavaScript"
}
let array = ["thisIsAnArray", 123]

// console.table([assignNumber, assignString, assignBoolean, number, string, boolean, obj, array])
// console.table([typeof assignNumber, typeof assignString, typeof assignBoolean, typeof number, typeof string, typeof boolean, typeof obj, typeof array])

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let initialValue = "Initial Value";
console.log(initialValue);
initialValue = "New Value";
console.log(initialValue);

// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.

const constDeclared = "const declared";
console.log(constDeclared);
const constDeclared = "new const declared";
console.log(constDeclared);