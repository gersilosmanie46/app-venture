// Filename: SophisticatedCode.js
// Content: Complex and elaborate JavaScript code example

// Define the main function
function main() {
  // Declare and initialize variables
  let a = 10;
  let b = 20;
  
  // Call a helper function
  let sum = addNumbers(a, b);
  console.log("Sum:", sum);
  
  // Create an array
  let array = [4, 8, 15, 16, 23, 42];
  
  // Call a function that performs operations on the array
  let result = manipulateArray(array);
  console.log("Manipulated Array:", result);
  
  // Generate a random number
  let randomNum = generateRandomNumber(1, 100);
  console.log("Random Number:", randomNum);
  
  // Create a complex object
  let complexObj = {
    name: "John",
    age: 25,
    city: "New York",
    interests: ["programming", "reading", "traveling"],
    address: {
      street: "123 Main St",
      zipCode: "10001",
      country: "USA"
    }
  };
  
  // Access and display object properties
  console.log("Name:", complexObj.name);
  console.log("Interests:", complexObj.interests);
  
  // Loop through array elements
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  console.log("Total:", total);
  
  // Perform a complex calculation
  let answer = calculateResult(a, b, complexObj.age);
  console.log("Answer:", answer);
}

// Helper function to add two numbers
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Function that manipulates an array
function manipulateArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let squared = arr[i] ** 2;
    result.push(squared);
  }
  return result;
}

// Function to generate a random number within a range
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function that performs a complex calculation
function calculateResult(num1, num2, num3) {
  let result = ((num1 * num2) + (num2 / num3)) ** 2;
  return result;
}

// Call the main function
main();