//create an array to store names of the companies
//1.remove first company 
//2.remove uber and add ola
//3.add amazon at the end

let companies = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix']

//1. removing first company
let val =companies.shift()
console.log("Removed item is ",val)

//2. 
companies.splice(2,1,"Ola")
console.log(companies)

//3
companies.push("Amazon")
console.log(companies)