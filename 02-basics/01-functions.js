function myName(){
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
}
myName();

/*function addTwoNumber(number1,number2){
    console.log(number1+number2);
} */
function addTwoNumber(number1,number2){
    //let result= number1+number2;
    //return result;
    return number1 + number2
}
const result = addTwoNumber(5,7);
console.log(result);


/*function loginUserMessage(username){
    return `${username} just logged in`;
} */
//if you didnt pass any value then the rsult will be undefined just logged in 
//console.log(loginUserMessage("Usama Ali"));
//console.log(loginUserMessage());

//if you dont pass anything it will retun sam
function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("please enter user name")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Usama Ali"));
console.log(loginUserMessage());

//rest and spread operator ...
function calculateCartPrice(val1,val2 , ...num1){

  return [val1, val2, num1];
}
//console.log(calculateCartPrice(200,200,2003))

const user ={
    username: "Usamma",
    price: 160
}  
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)


const myNewArray =[200,300,200,300]
function returnSecondValue(getArray){
    return [getArray[0],getArray[1]]
}
console.log(returnSecondValue(myNewArray))