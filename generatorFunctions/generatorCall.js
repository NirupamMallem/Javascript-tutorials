// when it comes to recursive function or calling
// one generator function from the other, 
// the yield* syntax is used

function* gen()
{
    console.log("hi")
}

function* gen1()
{
  const g = gen()
  g.next()  
}

const g1 = gen1();
g1.next();

// in case if i want to call the function directly

function* genpp()
{
    console.log("hi")
}

function* genvb()
{
   yield* gen();
}

const g1t = genvb();
g1t.next();