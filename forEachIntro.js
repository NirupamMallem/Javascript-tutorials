// ForEach is actually a method
// If we associate a specific funtion with an object, then it becomes a method
//example - toUpperCase() - Need to use with a string
let arr = [1,2,3,4,5,6,7,8,9,10]

let strarr = ["manipur","mizoram","Impal","meghalaya","usssh"]
arr.forEach(element => {
    console.log(element)
});

strarr.forEach((val)=>
{   
 console.log(val.toUpperCase())
})

strarr.forEach((val,idx,strarr)=>
{
   console.log(val,idx,strarr)
})