let promise = new Promise((resolve, reject) => { //setting promise

  setTimeout(() => { // using callback function
    if (6==7) { //parameter
     return resolve(" True");// if condition is true then resolve the promise
    } else {
      return reject(" false");// if condition is false then reject the promise
    }
  }, 500);
});
promise.then((SAM) => console.log(SAM)).catch((err) => console.log(err)); //using then and catch method
console.log("a")
// Then--- Handle success
// Catch--- Handle error
// Finally --- Run once promise is fulfilled
// SYNTAX(Finally)
// .finally(() => {
//    console.log("Promise is fulfilled");
// })