//let a=["a","b","c",'d'];
//for(let i=0;i<a.length;i++){
   // console.log(a[i]);
//}

// let b=[1,2,3,4];
// for(let i=0;i<b.length;i++){
// if (b[i]%2==0){console.log("even");
// }
// else{
//      console.log("odd");} console.log(b[i]);
    
// }


let a=[1,2,3,4,5,6,7,8,9];
for(let i=0;i<a.length-1;i--){
    console.log(a[i]);}


    let arr=[1,2,3,4,5] // 0 1 2 3 4
// To access the data 
// console.log(arr[0])

// Adding data from end
arr.push(6)

// deleting data from end;
arr.pop()

// adding data from start;
arr.unshift(0)

// adding data from start;
arr.shift(0)

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// let fruits=["apple","kiwi","banana","papaya"];
// for (let a of fruits){
//     console.log(a)
// }
// console.log(arr)

let num=[1,2,3,4,5];
let ans=num.map((item)=>item+1);
let ans2=num.filter((item)=>item%2==0)
console.log(ans2)

let que=[1,2,3,4,5,6];
// yes \no
let isPresent=false;
for(let i=0;i<que.length;i++){
    if(que[i]==4){
        isPresent=true;
    }
   
}
console.log(isPresent?"yes":"no")// Itenary operator

// let arr=[1,2,3,4,5];
// arr.push(6);
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift(0);
// console.log(arr)
// arr.shift()
// console.log(arr)
// // slice , splice
// // let ans=arr.slice(0,3);
// // console.log(ans);
// arr.splice(2,0,8);
// console.log(arr)

// Objects
// let obj={
//   a:1,
//   b:2,
//   c:3
// }
// obj.d=4
// obj.a=4;
// delete(obj.c)
// console.log(obj),;
//let arr=["a","b","c","a","b","d","@","&","@","&"];
let obj={}
for(let i=0;i<arr.length;i++){
  if(obj[arr[i]]==undefined){
    obj[arr[i]]=1;
  }
  else{
      obj[arr[i]]+=1;
  }
}
console.log(obj)