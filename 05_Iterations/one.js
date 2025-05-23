//for loop
/*for (let i = 0; i <= 10; i++) {
    const element = i;
   
    console.log(element);
     if (element == 5) {
        console.log("5 is best number");
        
    }else{
        console.log("not found");
        
    }
}
*/
/*for (let i = 0; i <= 10; i++) {
console.log(`outerloop ${i}`);

    for (let j = 0; j <= 10; j++) {
       console.log(`Inner value: ${j} and outer  loop ${i}`);

       for (let k = 0; k <= 10; k++) {
        console.log(`inner of inner ${k} and inner value ${j} and outer loop ${i}`);
        
        
       }
       
        
    }    
}
*/

for (let i = 5; i <= 5; i++) {
    for(let j = 0; j<=10; j++){
        console.log(`${i} x ${j} = ${i*j} `)
    }
}

let array = ["usama","Muneeb","Haseeb"]
console.log(array.length);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
    
}


//break and continue

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        break
    }
    console.log(`value of index is ${index}`);
    
}
for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue
    }
    console.log(`value of index is ${index}`);
    
}