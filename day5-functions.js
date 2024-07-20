// Functions:

// Activity 1: Function Declation

// Task1 : Write a Function to check if a number is even or odd and log the result to the console.
function evenOrOdd(number){
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    }
    else{
        console.log(`${number} is odd`);
    }
}

evenOrOdd(11)
evenOrOdd(10)

// Task2 : Write a function to calculate the square of a number and return the result.
function squareOfNumber(number){
    return number * number;
}

let resultoftask2 = squareOfNumber(5)
console.log(resultoftask2);
 
// Activity 2: Function Expression

// Task3 : Write a Function Expression to find the maximum of two numbers and log the result to the console.
function maxNum(a, b){
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(maxNum(10, 20));
console.log(maxNum(30, 20));


// Task4 : Write a Function Expression to concatenate two strings and returns the result.
const concate = function(string1, string2) {
    return string1 + string2;
}
let resultOfTask4 = concate("Chai", "Code");
console.log(resultOfTask4);

// Activity 3: Arrow Functions

// Task5 : Write an Arrow function to calculate sum of two numbers and return the result
const sum = (a, b) => a + b;
let resultOfTask5 = sum(10, 4)
console.log(resultOfTask5);

// Task 6 : Write an Arrow fuction to check if a string contains a specific character and return a boolean value.

const containsCharacter = (str, char) => str.includes(char);
let resultOfTask6 = containsCharacter("chai", "a" )
console.log(resultOfTask6);
console.log(typeof resultOfTask6);

// Activity 4: Fuction Parameters and default value

// Task 7 : Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const twoParameters = (a, b = 2) => a * b;
let resultOfTask7 = twoParameters(5, 3)
console.log(resultOfTask7);
let resultOfTask72 = twoParameters(5)
console.log(resultOfTask72);

// Task 8 : Write a function that takes a person's name and age and return a greeting message. provide a default value for the age.
const yourNameAge = (name, age = "unknown") => `Hello, ${name}! your age is ${age}`
let message = yourNameAge ("Hitech", 18);
console.log(message);
let message2 = yourNameAge ("Hitech");
console.log(message2);

// Activity 5: Higher-Order Fuction

// Task 9 : Write a higher-order function that takes a function and a number, and calls the function that many times.
const fnNum = (fn, times) => {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

const repeatfn = () => console.log("HelloWorld!");
fnNum(repeatfn, 3)


// Task 10 : Write a higher-order function that takes Two functions and a value, applies the first function to the value, and then applies the second function to the result.