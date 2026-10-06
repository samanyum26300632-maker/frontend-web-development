// EXAMPLE1
let numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers= numbers.filter(isEven);
console.log(evenNumbers);
function isEven(numbers){
    return numbers%2===0;
}

//EXAMPLE2
let ages= [32, 33, 16, 40,17,12,87,45,67,89,90];
const Adults= ages.filter(isAdult);
console.log(Adults);
function isAdult(age){
    return age>=18;
}
// Mostly used to filter the data based on the condition. It is used to create a new array with all elements that pass the test implemented by the provided function.
