let dev1 = {name:'msn',
skills:{
    primary:'js',
    secondary:'springboot'
}


}

//let dev2 = Object.assign({},dev1)

let dev2= JSON.parse(JSON.stringify(dev1));


dev2.name='msv'
dev2.skills.primary='front end'

console.log(dev1)
console.log(dev2)


