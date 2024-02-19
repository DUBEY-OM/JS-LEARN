const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=mynums.map((num)=> num+10)//no need of return
// const newnums=mynums.map((num)=> {return num+10})// need of return because of scope
const newnums=mynums.map((num)=> {return num*10}).map((num)=>(num+1)).filter((num)=> num>=20)// need of return because of scope

console.log(newnums)