const myNums = [1,2,3]
/* const myTotal = myNums.reduce(function (acc,currval) {
    console.log(`acc: ${acc} and currval ${currval}`);
    
    return acc + currval
    
},3) */
//we canalso write like this
const myTotal = myNums.reduce((acc,curl)=>acc+curl,0)

//here the above calue is accumalotor value
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);