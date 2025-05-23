// for of loop
// array specific loop

// ["","",""]
//[{},{},{}]

//forof loop
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}
const subj = ["ALi","USama","Rajpoot"]
for (const num of subj) {
    console.log(num);
    
}
const greetings =  "Usama ALi rajpoot"
for (const greet of greetings) {
    console.log(greet);
    
}

//Maps
//is famous for unique values and you can not duplicate thw two same values in it

const map = new Map()
map.set('IN',"India")
map.set('PK',"Pakistan")
map.set('fr',"France")
//console.log(map);
for (const [key,value] of map) {
    console.log(key,':' ,value);
    
}

/*
//this will not work we can not iterate objects like this we use forin loop
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key,value] of myObject) {
    console.log(key,value);
    
}
    */

