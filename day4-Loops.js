// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
let a = 1;

for (let i = 0; i <= 10; i++) {
    // console.log(a+i);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.

let b = 5;

for (let i = 1; i <= 10; i++) {
    // console.log(`${b} * ${i} = ${b*i}`);
}

// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i
    i++
}
// console.log(`sum: ${sum}`);

// Task 4: Write a program to print numbers from 1 to 10 using a while loop.
let oneToTen = 1
while (oneToTen <= 10) {
    // console.log(oneToTen);
    oneToTen++
}

// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let num = 1
do {
    // console.log(num);
    num++;
} while (num <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let number = 2;
let factorial = 1;
let facNum = 1;

do {
  factorial *= facNum;
  facNum++;
} while (facNum <= number);

// console.log(`Factorial of ${number} is ${factorial}`);

// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loops:

for (let Star = 1; Star <= 5; Star++) {
    let pattern = '';
    for (let Stars = 1; Stars <= 5; Stars++) {
        pattern += '* ';
    }
    // console.log(pattern);
}

// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let skipNum = 1; skipNum <= 10; skipNum++) {
    if (skipNum === 5) {
        continue;
    }
    console.log(skipNum);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let print = 0; print <= 10; print++) {
    if (print === 7) {
        break
    }
    console.log(print);
}