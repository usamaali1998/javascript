 
 // primitive (stack , copy milta ha ) , non primitive(Heap , refernce milta ha)
 
 let userOne = {
    email : "usama@gmail.com",
    upi: "usamaali333"
 }

 let userTwo = userOne
 userTwo.email = "abc@gmail.com"

 console.log(userOne)
 console.log(userTwo)