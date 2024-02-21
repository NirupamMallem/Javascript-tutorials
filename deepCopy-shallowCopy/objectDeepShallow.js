let dev1 = {name:'msn'}
//let dev2 = dev1

//dev2.name='msv'

// console.log(dev1)
// console.log(dev2)
// this is an example of shallow copy
// As obj is reference types. at line 2, the dev2 is also refering the same obj

// to avoid this
let dev3 = Object.assign({},dev1)
dev3.name='oye'
console.log(dev1)
console.log(dev3)

// other way using spread operator of es6

let dev4 = {...dev1}
dev4.name = "kick"

console.log(dev1)
console.log(dev4)