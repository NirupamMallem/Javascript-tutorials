// return() is similar to next()
// but it returns the object like
//{value: val, done: true}
// done is always true. So, return is used to terminate the generator
//console.log(gobb.return("condition satisfied")) // - terminates the generator
// we can also give message to the generator

function* gene()
{
    console.log("hello")
    yield "one"
    yield "two"

}
const gobb = gene()
console.log(gobb.next())
console.log(gobb.return("condition satisfied")) // - terminates the generator
console.log(gobb.next())
// console.log(gobb.return())

 //we can also suspend the termination if we use finally and yield statement in it

 // throw
// throw() throws an exception at the location of the 
//yield which made the last suspension in the generator function

function* gener()
{
    try{
        yield "one"
        yield "two"
    }catch(err)
    {
        console.log("error is ", err) 
    }
}

const gobj = gener()
console.log(gobj.next())
console.log(gobj.throw())
// console.log(gobj.return("check-check"))
console.log(gobj.next())