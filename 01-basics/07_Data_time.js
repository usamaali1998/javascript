 //Temporal Api
 //date object ha
 let myDate = new Date()
 console.log(myDate)
console.log(myDate.toString())

let myCreatedDate = new Date(2023, 0, 23 ,5,3)
console.log(myCreatedDate.toLocaleString())

let myTimeStamop = Date.now()
console.log(myTimeStamop)
console.log(myTimeStamop.toLocaleString())
console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))

console.log(myDate.getMonth())
console.log(myDate.getDay())
console.log(myDate.getFullYear())

myDate.toLocaleString('default', {
    weekday : "long",
})