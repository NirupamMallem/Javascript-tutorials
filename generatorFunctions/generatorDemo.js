//Generators helps to pause and reusme the code
// A normal function return a single value
// But , generators are a kind of functions which are used to return multiple values in phases
//function* - used to define a generator
// yield is an operator which is used to pauses the generator
// yield is also used to receive input and send output

const gen = function* ()
{
    console.log("hello")
    yield "yield value";
    console.log("world")
    yield;
    console.log("galaxy")
}
const gobj = gen(); // It does not call the generator,
//it return the gen object.
// console.log(gobj)
// const o = gobj.next()
// console.log(o)
// so we have next() method, to start the execution.
// It starts the execution and executes till the yield operator

// next() returns two keys - 1.value 2.boolean (shows next() status)

// Generators are iterable
// it is used to iterate through the entire generator function
for(let o of gobj)
{
    console.log(o);
}
// we can also use the spread operator
const gg = [...gen()]
console.log(gg)