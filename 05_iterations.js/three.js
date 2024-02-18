//for of loop
const arr=[1,2,3,4,6]
for (const num of arr) {console.log(num)
    
}
//map
const map=new Map()
map.set('IND',"INDIA")//giving keys and key values
map.set('US',"United States")
map.set('AUS',"AUstralia")
// console.log(map)
for (const [key,value] of map) {console.log(key,'-:',value)
    
}
//objects are not itteratable
