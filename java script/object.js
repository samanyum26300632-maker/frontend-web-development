// Objects
// let obj={// created object
//   a:1,
//   b:2,
//   c:3
// }
// obj.d=4// adding new key value pair
// obj.a=4;
// delete(obj.c)// deleting key value pair
// console.log(obj),;
// let arr=["a","b","c","a","b","d","@","&","@","&"];


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