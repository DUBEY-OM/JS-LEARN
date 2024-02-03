array1=[1,2,22,77]
array2=[122,89,0,78]
//array1.push(array2)
//console.log(array1)
//console.log(array1[4][1])//inserts array in an array 
//const array3=array1.concat(array2)
//console.log(array3)
array4=[...array1,...array2]
console.log(array4)//spread
const another_array=[1,2,3,4,[23,45,66,99],7,[12,990,0,34,[78,56,110]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)
console.log(Array.isArray(array1))
console.log(Array.from('array1'))
console.log(Array.from({name:'array1'}))//empty array is generated

const score1=100
const score2=200
const score3='om'
console.log(Array.of(score1,score2,score3))//generates array from individual elements