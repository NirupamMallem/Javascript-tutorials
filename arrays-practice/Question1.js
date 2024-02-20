// Find avg of elements in array
let arr = [85,97,44,37,76,60]
let sum = 0;
for(let item of arr)
{
  sum += item;
}
console.log(sum)
let avg = sum/arr.length
console.log(avg)

// if u use for - in , output is not accurate

// for(let item of arr)
// {
//   sum += item;
// }
// console.log(sum)
// let avg = sum/arr.length
// console.log(avg)