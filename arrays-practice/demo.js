let marks = [1,2,3,4,5]
console.log(marks);
let sizeOfArray = marks.length

//typeof array = object


// looping over an array - forOF, forIn, i,i++

let heros = ["nirupam","vaibhav","vijay","ajay"]
for( item of heros)
{
    console.log(item)
}

for(let idx = 0;idx<heros.length;idx++)
{
    console.log(heros[idx].toLocaleUpperCase())
}

for(item in marks)
{
    console.log(item)
}