/*const isUserLogged = false

if (isUserLogged) {
    // the code inside parenthesis will run
    console.log("hello world")
} else{
    console.log("this is else statement")
}
if (2=="2") {
    //the code inside parenthesis will not run
    console.log("yes")
}
    */

//<,> <=,>= , == (assignment) ,!= , ===(strict equal,this also check the equality as well as type),  

/*const score = 200
if (score > 100) {
    //const power = "fly"
    //var power = "fly"
    let power = "fly"

    console.log(`user power : ${power}`);
    
}
console.log(`user power : ${power}`);

*/

//implicit scopre zeh aik hi line may execute hota ha
/*const balance = 100
if (balance < 500) console.log("test"),console.log("test2");
*/

//nesting

const balance = 500
if (balance < 500) {
    console.log("less than")
}else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 900");
    
} else {
    console.log(
    "less than 1200" );
}

const isUserLoggedIn = true 
const debitCard = true
const isUserLoggedInFromGoogle = false
const isUserLoggedInFromEmail = true

if (isUserLoggedIn && debitCard) {
    console.log("Allow to buy Course");
    
}
 if (isUserLoggedInFromGoogle || isUserLoggedInFromEmail) {
    console.log("Allow to buy course");
    
    
 }
