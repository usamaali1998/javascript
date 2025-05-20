//we can create an object like this
//const tinderUser = new Object()


const tinderUser = {}
tinderUser.id =  "123abc"
tinderUser.name = "usama"
tinderUser.isLoggenIn = false
//console.log(tinderUser) 

const regularUser = {
    email: "soome@google.com",
    fullname : {
        userFullName : {
            firstName : "Usama",
            lastName : "Ali"
        }
    }
}

//console.log(regularUser.fullname.userFullName.firstName)

//object within an object store

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
//const obj3 = {obj1,obj2}
// {} is target,  obj1 and obj2 are source result will store in target
//const obj3 = Object.assign({}, obj1,obj2)
//but we will use spread operatr ...
const obj3 = {...obj1, ...obj2}
//console.log(obj3)

//if we get array of object

const users = [
    {
        id:1,
        email : "usama@test.com"

    },
    {
        id :2,
        email: "test@test.com"
    }
]

users[1].id
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.keys(users))

console.log(Object.values(tinderUser))
console.log(Object.values(users))

console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogged'))
