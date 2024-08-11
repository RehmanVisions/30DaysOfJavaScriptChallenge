// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
function checkNumber(num) {
  if (num > 0) {
    console.log("The number is positive");
  } else if (num < 0) {
    console.log("The number is negative");
  } else {
    console.log("The number is zero");
  }
}
// checkNumber(0)

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

function checkEligibility(age) {
  if (age >= 18) {
    console.log("You are eligible to vote");
  } else {
    console.log("You are not eligible to vote");
  }
}
// checkEligibility(24);

// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
function largestOfThree(a, b, c) {
  if (a >= b && a >= c) {
    console.log(`a = ${a} is the largest Number`);
  } else if (b >= a && b >= c) {
    console.log(`b = ${b} is the largest Number`);
  } else {
    console.log(`c = ${c} is the largest Number`);
  }
}
// largestOfThree(5, 10, 8);

// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

const day = 7

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("default:Funday");
        break;
}