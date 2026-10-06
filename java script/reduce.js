//EXAMPLE1
const prices= [200,300,400,500,600,700,800,900,1000];
const totalprice= prices.reduce(getTotalPrice);//reduce method is used to reduce the array into a single value. It takes a callback function as an argument and executes it on each element of the array, accumulating the result into a single value.
console.log(`${totalprice.toFixed(2)}`);//toFixed method is used to round off the value to 2 decimal places.
function getTotalPrice(num1,num2){
    return num1+num2;
}

//EXAMPLE2
let marks= [32, 33, 16, 40,17,12,87,45,67,89,90];
const maxMark= marks.reduce(isMax);
console.log(maxMark);
function isMax(mark1, mark2){
    return Math.max(mark1, mark2);
}