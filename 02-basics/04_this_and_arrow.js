const user = {
    username : "usama",
    price :124 ,

    welcomeMessage : function(){
        console.log(`${this.username}`)
        console.log(this)
    }
     
}

user.welcomeMessage()
user.username = "Max"
user.welcomeMessage()
//console.log(this)

const chai = function (){
    let username = "usama"
    console.log(this.username)
}
chai()

//we can also write like this

const fifa = () =>{
    let username = "usama"
    console.log(this.username)
}

fifa()
// ()=>{}
//basic arrow function
const addTwo = (num1,num2)=>{
    return num1+num2
}
console.log(addTwo(2,10));

//we can also write an arrow function like this 
const addThree = (num1,num2) => num1 +num2
console.log(addThree(40,300))
// {} use hua tou return likhna paray ga if () likhy tou no need of return
