// Events normally bubble up to the upper elements. 
// Propagation means the events bubbling Up

//Element.addEventListner(type,func,useCapture)
//useCapture is a boolean and it is by default false. It means that the events bubbleUp.
let dd = document.getElementById('d')
let pp = document.getElementById('p')
let ss = document.getElementById('s')

dd.addEventListener('click',(ev)=>
{
    ev.stopPropagation();
    console.log("inside div")
})

pp.addEventListener('click',(ev)=>
{
    ev.stopPropagation();
    console.log("inside para")
})

ss.addEventListener('click',(ev)=>
{
    ev.stopPropagation();
    console.log("inside span")
})


