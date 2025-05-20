//nested scopes

function one(){
    const username= "Usama"

    function two() {
        const website = "youtube"
        console.log(website)
    }

    console.log(username);
    two()
}

one()

if (true) {
    const username = "usama"
    if (username==="usama"){
        const website =  "youtube"
        console.log(username + website
        )
    }
    
    
}
console.log(addone(6))

function addone(num1){
    return num1+2
}
//console.log(addone(6))
//for hoisting we use let and const instead of var

//console.log(addTwo(5))
addTwo(5)

const addTwo = function(num){
    return num +2
}

//console.log(addTwo(5))
