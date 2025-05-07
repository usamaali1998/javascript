console.log(null == undefined)
console.log(null >= 0)
// the reason is that an equality check == and comparison > <>= <= work differently
// comparison convert null to a number treating it as 0
// thats why (3) null>=0 is true and 1 null > 0 is false
/// === strictly check it check value as well as datatype
