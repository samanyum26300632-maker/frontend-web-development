// EXAMPLE1
const numbers = [1, 2, 3, 4, 5];
const cubes= numbers.map(cube);
console.log(cubes);
function cube(element){
    return Math.pow(element,3);
}

//EXAMPLE2
const characters = ["a", "b", "c", "d", "e"];
const upperCaseCharacters = characters.map(toUpperCase);
console.log(upperCaseCharacters);
function toUpperCase(element){
    return element.toUpperCase();
}   
// Mostly used to convert the data into a different format. It is used to create a new array with the results of calling a provided function on every element in the calling array.