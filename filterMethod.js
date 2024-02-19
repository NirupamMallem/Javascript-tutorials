//filter all even numbers
let arr = [1,3,2,4,5,6,7,8,9,10]

let evenArr = arr.filter((val)=>
{
    return val%2==0;
    //return val%2!=0;
    //return val>3
})
console.log(evenArr);
