const name = "usama"
const repoCount = 50
console.log(name+repoCount + " Value" ) //outdated syntax
// this is called string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
 
const gameName = new  String ('gaame')
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.anchor())
console.log(gameName.at())
console.log(gameName)

const newStringOne = "     Usama   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "www.google.com"
url.replace('google','usama')
console.log(url.replace('google','usama'))
console.log(url.includes('usama'))
console.log(url.split('.')) //split based on .