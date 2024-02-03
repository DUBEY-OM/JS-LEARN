//array
const myarray=[0,1,2,4,5,6,99]
const myarray2= new Array(0,1,45,66,78)
console.log(myarray[1])
console.log(myarray2[4])
//methods
myarray.push(56)
myarray.push(990)
console.log(myarray)

myarray.pop()
console.log(myarray)

myarray.unshift(45)
console.log(myarray)
myarray.shift()
console.log(myarray)
console.log(myarray.includes(8))
console.log(myarray.indexOf(6))

const newarr=myarray.join()
console.log(newarr)
console.log(typeof(newarr))

console.log("A",myarray)
const myarray3=myarray.slice(1,3)
console.log("B",myarray)
console.log(myarray3)
const myarray4=myarray.splice(1,3)
console.log(myarray4)
console.log("c",myarray)