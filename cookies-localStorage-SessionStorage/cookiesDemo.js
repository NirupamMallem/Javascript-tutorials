document.cookie='name=niru'
// setting expiration
document.cookie='name2=xylo; expires= '+new Date(2024,0,1).toUTCString()
// we need to add the UTC and the easiest way is 
// to use js dates
// view
console.log(document.cookie)