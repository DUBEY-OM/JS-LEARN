function saymyname(){
    console.log("O")
    console.log("M")
}
saymyname()
function add(number1,number2){
    console.log(number1+number2)
}
add(9,9)
const resultt=add(23,9)
console.log("Result: ",resultt)//undefined
function add(number1,number2){
   result=number1+number2
   return result
   console.log("ijjk")
}
console.log("Result: ",result)
function message(username){
    if (username==undefined){
        console.log("please enter a username")
    return}
    return `${username} just loggedin`
}
console.log(message())


function calccartprice(val1,val2,...num1){return num1}//rest operator
console.log(calccartprice(200,400,500,1000,300))

const user={name:"om",price:2000}//object in a function
function totalprice(anyuser){console.log(`username is ${anyuser.name} and price is ${anyuser.price}`)}
totalprice(user)

const myarray=[200,300,400,500]//array in a function
function returnsecondvalue(array){return array[2]}
console.log(returnsecondvalue(myarray))
console.log(returnsecondvalue([200,5000,7000,6]))