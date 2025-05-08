const score = 400
const balance = new Number(100) // for specifically assigned the data type
console.log(score)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2)) // decimal kay baad kitny decimal

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4))

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'))

//Math()
console.log(Math.random(0,4))
console.log(Math.abs(-5))
console.log(Math.round(4.6)) // nearest value round
console.log(Math.ceil(4.3)) //4 say yara sa upr mean 5
console.log(Math.floor(4.9)) //lowest value
console.log(Math.min(3,5,6,7))
console.log(Math.max(4,6,7,4,3))

console.log(Math.random)
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)
const min =10
const max = 20
console.log(Math.random()*(max-min+1))
console.log(Math.floor(Math.random()*(max-min+1))+min)