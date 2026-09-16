let promise = new Promise((resolve, reject) => { //setting promise

  setTimeout(() => { // using callback function
    if (6==7) { //parameter
     return resolve(" True");
    } else {
      return reject(" false");
    }
  }, 500);
});
promise.then((SAM) => console.log(SAM)).catch((err) => console.log(err)); //using then and catch method
console.log("a")
