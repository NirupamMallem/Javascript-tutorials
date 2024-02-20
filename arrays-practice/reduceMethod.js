// used to perform some operations on various given
//input values and return the single value.
// sumCalculator:

const arr = [1,2,3,4,5,6,7,8,9,10]
const initialValue  = arr[0];
const sumInitial = arr.reduce((accumulator,currentvalue)=>
{
   return accumulator+currentvalue+initialValue;
})

console.log(sumInitial)