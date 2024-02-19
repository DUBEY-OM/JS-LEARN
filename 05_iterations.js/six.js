const coding = ["java", "python", "cpp", "ruby", "js"]
const values = coding.forEach((element) => {
    console.log(element);
    return element;
});
console.log(values)//doesnot returns anything
const mynums=[1,4,5,6,7,3,8,0]
// const newnums=mynums.filter((num)=>num>4)
// const newnums=mynums.filter((num)=>{return num>4})//return is used because of scope is fixed
newnums=[]
mynums.forEach((num)=>{if(num>4){newnums.push(num)}})
console.log(newnums);