// Day 6: Arrays

// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let arr = [1, 2, 3, 4, 5]
console.log(arr);

// Task 2: Access the first and last elements of the array and log them to the console.
console.log(arr[0]);
console.log(arr[4]);

// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
arr.push(7);
console.log("Array after puch:", arr);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop()
console.log("Array after pop:", arr);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr.shift()
console.log("Array after shift:", arr);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(100)
console.log("Array after unshift:", arr);