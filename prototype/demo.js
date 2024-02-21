let a = {
    name:'msn',
    age : 10,
    language:'javaScript',
    run: ()=>
    {
        console.log("running in a object - self run")
    }

}

let p = {
    run: ()=>
    {
        console.log("running in p object")
    }

}

let x = {
    firstName:'The'
}

a.__proto__=p
a.run()
console.log(a.firstName)