let mydate=new Date()
console.log(mydate.toString())  
console.log(mydate.toDateString())  
console.log(mydate.toLocaleString())  
console.log(typeof mydate)  
let mytdate= new Date(2023,06,21,5,3)//month start with 0
console.log(mytdate.toLocaleString())
console.log(mytdate.toDateString())
let mycdate=new Date("2-05-2024")//month start with 1 in yyyy-mm-dd format
console.log(mycdate.toLocaleString())
let myTimeStamp=Date.now()
console.log(myTimeStamp)//value in ms from 1-1-1970
console.log(mycdate.getTime())
console.log(mycdate.getDay())
console.log(mydate.toLocaleString('dafault',{weekday:"narrow"}))
