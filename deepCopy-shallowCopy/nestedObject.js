//In case of nested objects, Object.assign() and the 
// spread operator dont work

let dev1 =
{
    name:'msn',
    skills: {
        primary: 'full stack',
        secondary:'devops'
    }
}

let dev2 = JSON.parse(JSON.stringify(dev1))
dev2.name='mnv'
dev2.skills.primary='back end'

console.log(dev1)
console.log(dev2)

//JSON parse and stringify works fine until we dont 
// have functions and objects in the object
// In case of functions, the functions get completely lost in the shallow copy
// in case of date object, the date object gets converted to string object in the shallow copy

// to overcome this, we use loadash library