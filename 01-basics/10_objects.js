//constructor say singleton banay ga
// object lietrals

//singleton method
//Object.create
const mySym = Symbol("key1")

const JsUser = {
    name: "Usama",
    "fullname" : "USamaAli",
    //v imp for interview
    [mySym] : "mykey1",
    age : 26,
    location : "Rwp",
    email : "usama@gmail.com",
    isLoggenIn : false,
    lastLoginDays : ["Mon","Sat"]


}
console.log(JsUser.lastLoginDays[0])
//we can also print like this but make sure use string to acces the value
console.log(JsUser["age"])
console.log(JsUser.email)
console.log(JsUser["fullname"])
console.log(JsUser[mySym])
JsUser.email = "chart@gps.com"
console.log(JsUser)

//agar changes ko freeze krna ha  we use
//Object.freeze(JsUser)
//this new changes will not reflect
JsUser.email = "hhhh@pmail.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

