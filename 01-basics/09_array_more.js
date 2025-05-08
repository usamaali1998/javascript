const marvel_heros = ["thor","IronMan","spiderman"]
const dc = ["superman","flash","batman"]
//marvel_heros.push(dc)
//console.log(marvel_heros)
//console.log(marvel_heros[3][1])

//const allHeros = marvel_heros.concat(dc)
//conacat new arrasy may push krta ha
//console.log(allHeros)

//spread operator ... is used to spread

//const all_new_heros =[...marvel_heros, ...dc]
//console.log(all_new_heros)


//const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
//const  real_another_array = another_array.flat(Infinity)
//console.log(real_another_array)

console.log(Array.isArray("Usama"))
console.log(Array.from("Usama"))
console.log(Array.from({name: "usama"})) //interesting for interview becoy it will not convert and just return empty arrray

