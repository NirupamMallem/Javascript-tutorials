// prices of 5 items

// ALL items have 10% off. change the 
// array to store final price after offer

let arrold = [250,645,300,900,50]
let arrnew = []
for(item of arrold)
{
  offer = item/10
  item = item-offer
  
  arrnew.push(item)
}

console.log(arrnew)