let dev1 = {name:'msn'}
let dev2 = dev1;

dev2.name='msv'

console.log(dev1)
console.log(dev2)

//object.assign()

let dev3 = {name:'msn'}
//let dev4 = dev1;
let dev4 = Object.assign({},dev3)
let dev5 = [...dev3]

dev4.name='msv'
dev5.name='msv'

console.log(dev3)
console.log(dev4)
console.log(dev5)
