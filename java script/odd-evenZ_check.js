let num=[1,2,3,4,5];// created array
let ans=num.map((item)=>item+1);// run every number
let ans2=num.filter((item)=>item%2==0)// choose only even numbers
console.log(ans2)// prints only even number

let que=[1,2,3,4,5,6];
let isPresent=false;// checkinmg every number in the array if 4 is present or not
for(let i=0;i<que.length;i++){// runs every number in the array
    if(que[i]==4){
        isPresent=true;// prints true if 4 is present in the array
    }
   
}
console.log(isPresent?"yes":"no")// Itenary operator