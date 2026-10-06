async function myfunction() {
    try{
 const response= await fetch("https://jsonplaceholder.typicode.com/todos/1"); // fetching data from the API
if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);// checking if the response is ok or not
}

await response.json();// converting the response to json
console.log("Data fetched successfully");
}
catch (error) {
    console.error('Error:', error);// catching the error if any
 } //finally {

//     console.log("Promise is fulfilled"); // finally block will run after the try and catch block is executed
// }
 myfunction(); // calling the function
    console.log("End of the function"); 
}
