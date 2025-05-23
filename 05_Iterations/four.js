//for in loo
const myObject ={
    js : 'JavaSCript',
    cpp : 'C++',
    rb : 'ruby',
    switf : "swif by Apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js","rb","java","cpp"]
for (const key in programming) {
    console.log(programming[key]);
    
}

/*
const map = new Map()
map.set('IN',"India")
map.set('PK',"Pakistan")
map.set('fr',"France")
//console.log(map);
for (const key in map) {
    console.log(key);
    
}
    */

