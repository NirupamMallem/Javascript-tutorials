// used to perform some operations on various given
//input values and return the single value.
// sumCalculator:

const arr = [1,2,3,4,5,6,7,8,9,10]
//const initialValue  = arr[0];
//const max = arr[0];
const Largest = arr.reduce((prev,currentvalue)=>
{
   if (currentvalue>prev)
   {
     return currentvalue;
   }
   else{
    return prev;
   }
  
})

console.log(Largest)