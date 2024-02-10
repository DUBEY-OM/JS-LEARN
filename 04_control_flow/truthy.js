email=false
if(email=''){console.log("got  user email")}
else{"Dont have email"}
//falsy values
//false,0,-0,BigInt 0n,null,undefined,Nan,""
//truthy:"0",'false',"",[],{},function(){},
array=[]
if(array.length===0){console.log("Array is Empty")}
const emptyobj={}
if(Object.keys(emptyobj).length===0){console.log("object is empty")}
//nullish collescing operator(??):null undefined
let val1=5;
// val1=5??10
// val1=null??10
// val1=undefined??12
// val1=null??undefined
// console.log(val1)
//Terniary operator
val1 >=33? console.log("less than 80"):console.log("Greater than 80")