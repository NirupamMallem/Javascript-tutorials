function* gener()
{
    try{
        yield "one"
        yield "two"
    }finally{
        yield "finaally yield"
    }
}

const gobj = gener()
console.log(gobj.next())
console.log(gobj.return("check-check"))
console.log(gobj.next())    