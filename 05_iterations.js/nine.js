const nums=[1,2,3,4]
// const mynums=nums.reduce(function(acc,currval){
//     // console.log(`acc:${acc} & currval:${currval}`)
//     // return acc+currval},0)
const mytotal=nums.reduce((acc,curr)=>acc+curr,0)

console.log(mytotal)