// special function that are used to pause and resume the code
// generators are a kind of functions, which can return multiple values in phases
// function* - makes a fn generator
// yield is an operator which pauses the generator
//yield aslo helps to receive i/p and send output


const genfun = function* ()
{
    console.log("hello")
    yield "returned value of yield 1"
    console.log("world")
    yield "returned value of yield 2"
    console.log("galaxy")
    yield "returned value of yield 3"
} 
const gobj = genfun();
//next() to execute the gen function till the yield
const o = gobj.next() // returns 2 keys 
// 1. value and 2. boolean(shows next status)
console.log(o)

//gen fns are iterable
for(let o of gobj)
{
    console.log(o)   
}
//As it is iterable , we can also use spread operator
const gobj1 = [...genfun()]
console.log(gobj1)

//calling one generator from the other:
// yield* is used

function* gen2()
{
    console.log("BEFORE YIELD 1")
    yield "output of first yield"
    console.log("BEFORE YIELD 2")
    yield "output of second  yield"

}

function* gen3()
{
    console.log("BEFORE YIELD 1 - gen3")
    yield "output of first yield - gen3"
    console.log("BEFORE YIELD 2 - gen3")
    yield "output of second  yield -gen3"
    // const g2 = gen2();
    // g2.next();
    yield* gen2() 

}
const g3 = gen3();
g3.next();

//return method - used to terminate the execution of the generator
//it returns an object - {value:val,done:true}
// done is always true for return()


function* gen5()
{
    console.log("BEFORE YIELD 1")
    yield "output of first yield"
    console.log("BEFORE YIELD 2")
    yield "output of second  yield"

}

const g5 = gen5();
console.log(g5.next());
console.log(g5.return("CONDITION SATISFIED"));
console.log(g5.next());

// WE CAN ALSO SUSPEND THE TERMINATION
// writing yield() inside finally() will not allow the return() to terminate.



function* gen6()
{
    try{
        console.log("BEFORE YIELD 1")
        yield "output of first yield"
        console.log("BEFORE YIELD 2")
        yield "output of second  yield"
    }
    finally
    {
          yield "Finally is under action"
    }
}
const g6 = gen5();
console.log(g6.return())
console.log(g6.next())

//throw() - it throws an exception at the location of yield which
//made the last suspension in the generator function.

function* gen7()
{
    try{
        console.log("BEFORE YIELD 1")
        yield "output of first yield"
        console.log("BEFORE YIELD 2")
        yield "output of second  yield"
    }
    catch(err)
    {
           console.log("error is ", err)
    }
}
const g7 = gen7();
console.log(g6.next())
console.log(g7.throw())
