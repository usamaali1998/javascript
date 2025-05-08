const myArr = [0,1,2,3,4,5,6,7]
console.log(myArr[1])
console.log(myArr.push(6))
console.log(myArr.pop())
console.log(myArr.unshift()) 
console.log(myArr.includes(8))
//join() it will convert into string
const newArray = myArr.join()
console.log(myArr)
console.log(newArray)

//slice , splice

console.log("A", myArr);
const myn1 = myArr.splice(1,3)
console.log(myn1)
console.log("B",myArr)



 