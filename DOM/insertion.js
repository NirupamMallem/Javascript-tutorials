// 1. create 
// 2. insert

let newbtn = document.createElement("button")
newbtn.innerText="SUBMIT"

// we have 4 imp methods to add
// select the node with which you want to insert 
// the element into the DOM

let divv= document.querySelector("div")
divv.append(newbtn)

// we use remove() method to delete element from the DOM
let paragraph = document.querySelector("p")
paragraph.remove();
