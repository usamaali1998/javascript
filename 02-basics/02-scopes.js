/*let a = 10
const b = 20
var c = 30

//{} these carly braces are called scopes in javascript
console.log(a,b,c)
*/

//var is function scoped or globally scoped but notblocked scoped
//let and const are block scoped it only exists within the block


let a = 300
if(true){
    let a= 10
    const b = 113
    var c = 100
    console.log("Inner", a);
}
console.log(a)

let array = [1,2,3,4,5,5,6,7]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
    
}