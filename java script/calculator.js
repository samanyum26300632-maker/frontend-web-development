// taking input in different lines
var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));
console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));
console.log("Multiplication: " + (num1 * num2));
console.log("Division: " + (num1 / num2));

// taking input in single line
var input = prompt("Enter two numbers separated by space:");
var numbers = input.split(" "); 
var num1 = Number(numbers[0]);
var num2 = Number(numbers[1]);
console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));
console.log("Multiplication: " + (num1 * num2));
console.log("Division: " + (num1 / num2));