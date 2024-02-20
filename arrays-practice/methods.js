//Push() = add to end - changes in the original array
// pop() = delete from end and return - changes in the original array
// toString() - converts to string - gives a new string

let arr1  = [1,2,3,4,5]

//concat() - joins arrays and returns the result but do not change the original arrays

let arr2 = ['a','b','c']
let arr3 =[41,42,43,44,45]

let heros = arr1.concat(arr2,arr3)

console.log("Heros are", heros)

//we can also use contact() as push() by just giving the list of numbers

const bb= heros.concat(1,2,3)
console.log("BIG BOSS -----" , bb)

// unshift() - similar to push(), but adds element at the start
// shift() - similar to pop(), but pops from the start

//slice() - returns a piece of the array - doesnt change the original array
//splice() - changes  the original array - takes 3 parmeters atmost

console.log(heros.slice(1,3))

//splice()
// remove and add
let urarr= [11,12,13,14,15]
urarr.splice(2,2,101,102)

//It removes 2 elements from idx 2, and adds 101,102 at the removed places

console.log(urarr)
// dont remove but add
urarr.splice(2,0,10190)
console.log(urarr)

// replace 
urarr.splice(3,1,13201)
console.log(urarr)

//splice as slice but deletes

urarr.splice(4)
//so, if we just mention the index number, 
// it deletes the array part from 4 th index.

//sort() - default is ascending
// it converts to strings and compares using UTF16

let names = ["nirupam","vaibhav","msn","msv"]
names.sort()
console.log(names)

let ran = [23,6,12,7,678,90]
ran.sort(comapre)
console.log(ran)

function comapre(a,b)
{
    //1. return is < 0 -- a is first
    //2. return is 0 -- no change
    //3. return is >0 -- b is first
    return a-b
}
// I have an objct with name and price - I want to sort names based on the price in ascending order
const products =[
    {
        name:'laptop',
        price:1000

    },
    {
        name:'pen',
        price:5

    },
    {
        name:'watch',
        price:50

    },
    {
        name:'pencil',
        price:2

    },

];
products.sort((a,b)=> 
{
    return a.price-b.price;  // Ascending order
    // return b.price-a.price // Descending order
});
console.log(products)


//fill() - changes all the elements inside the array with the provided value
// also returns an array

let uu = [1,2,3,4,5,6,7,8]
let nn = uu.fill(0)
console.log(nn)  // -- all are zeros

// u can also specify the postions of filling
let kk = [1,2,3,4,5,6,7,8]
kk.fill(0,1,5)  // - from 1 st index to 4 th index, 0s will be filled
console.log(kk)

// We can use fill() with map() to take n as input and 
// populate an array from 1 to n as follows:

function fillInNumbers(n)
{
    return Array(n).fill(0).map((_,idx)=> idx+1);
}
console.log("FILLED IN NUMBERS",fillInNumbers(20))

//includes() - returns boolean 
// Used to find if an element is there in the array

const nnn = ["abc","def","ghi"]
const ansfinal = nnn.includes("yyy")
console.log(ansfinal)

// join() - creates a new string by concatinating all the elements in the array
// by default seperator is comma

const coun = ["india","USA","Canada"]
//const fii = coun.join()
const fii = coun.join(' - ')
console.log(fii)

//reverse() - it changes the original array
// if u do not want to do so, assign that to a new array
const eww = coun.concat().reverse(); // or u can use spread operator
const eww2 = [...coun].reverse();
// coun.reverse()
console.log(eww)
console.log(eww2)

// reversing the characters in the string
// Use revesre with split, and join
const sttrr = "coding is very fun"
let aaa = sttrr.split('').reverse().join('');
console.log(aaa)

//indexOf() and lastIndexOf()
// gives first index of the match
const mno = ['a','b','c','d']
const idx = mno.indexOf('b')
mno[idx] = "nirupam"
console.log(mno)

//every()
// executes a given function on every item on the aray and returns true
// only if the callback function return true for all the items.
//If a flase is found, returns false

const iii = [1,2,3,4,5,6,7,8,9]
const res = iii.every(ispositive)
function ispositive(item)
{
    return item>0
}
console.log(res)

//test if all the objects have certain property

const perrr = [
    {
        name:"nirupam"
    },
    {
        name:"vaibhav"
    },
    {
        name:"vijay"
    },
    {
        name:"ajay"
    },
]
const rrrr = perrr.every(()=>personalbar.name!=undefined)
console.log(rrrr)

//some()
// executes a given function on every item on the aray and returns true
// only if the callback function return true for atleast 1 item.
let ooo = iii.some(greaterThanFour)
function greaterThanFour(item)
{
    return item>4
}
console.log(ooo)

// we have an array object of people and want to check if 
//atleast one person from the people is adult.

people = 
[
    {
        name:"msn",
        age:9
    },
    {
        name:"msv",
        age:23
    },
    {
        name:"leo",
        age:56
    },
    {
        name:"badass",
        age:11
    }
];

const ttt = people.some(checkOnce)
function checkOnce(people)
{
    return people.age>18;
}
console.log(ttt)

//find()
// search the array and return the first element for which the callback return true
const statesss = ['ap','ts','mp','up']
let ooww = names.find(findTS)

function findTS(item)
{
    return item == 'ts'
}
console.log(ooww)
// usecase 2 - find a person with name and return age
people = 
[
    {
        name:"msn",
        age:9
    },
    {
        name:"msv",
        age:23
    },
    {
        name:"leo",
        age:56
    },
    {
        name:"badass",
        age:11
    }
];

const finnnalll = people.find(findLEO).age;
function findLEO(people)
{
   return people.name === 'badass'

}
console.log(finnnalll)

//findIndex() - similar to the find() , but returns the index

//from()
// creates a new shallow copy of an array from an array like iterable object
// lets say we need to convert a string of numbers to 
//array of numbers 

let uuy = '1234567890'
const uuyy = Array.from(uuy)
console.log(uuyy) // we got a string of numbers seperated by commas

// use callback function to convert into numbers

const uuyyy = Array.from(uuy,mapFn);
function mapFn(xx)
{
    return Number(xx);
}

console.log(uuyyy)

// or using Arrow Function

const uuyyyc = Array.from(uuy,xx=>Number(xx));
console.log(uuyyyc)

//If you want to remove all the duplicate values from an array
const clear = [1,2,3,4,3,2,5,6,7,4,7,9,0]
// convert to set and then convert into array again
let resff = Array.from(new Set(clear));
console.log(resff)

// isArray()
// checks if the passed in value is in array

const hello = ['nirupam','vaibhav','eee']
const sss = 'eee'
const numdf = 34

console.log(Array.isArray(sss))

console.log(Array.isArray(hello))

//flat()
//  creates a new array with all the sub array elements concatenated into it.Array

const d2 = [1,2,3,[4,5],6,[7,[8,9,10]]]
// const ui = d2.flat(3)
const ui = d2.flat(infinity)
console.log(ui)