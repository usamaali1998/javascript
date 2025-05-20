//immediately invocked function expression (IIFE)
(function chai(){
    //named IFFI
    console.log(`DB conneccted`);
})();

((name)=>{
    console.log(`DB connected ${name}`)
})("Usama")