/* flasy values 
false, 0,-0,BigInt, 0n, undefined, NaN

//truthy values
rest all truthy vlaues, 
"0", 'false', " " , [] ,{} , function(){}
*/






const userEmail = []
if (userEmail) {
    console.log("got usr emai");
    
} else {
    console.log("Dont have email");
    
}

if (userEmail.length === 0) {
    console.log("Array is empty");
    
}

const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??) : null
let val1;
//val1 = 5??10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1= null ?? 100??10
console.log(val1);

// Ternary Operator

//condition ? true : false

const iceTeePrice = 100
iceTeePrice >= 1001 ? console.log("less tan 90") : console.log("more than 90");

