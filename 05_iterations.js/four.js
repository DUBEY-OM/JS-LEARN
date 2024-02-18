const myobj={
    js:'javascript',
    cpp:'c plus plus',
    rb:'ruby',
    swift:'apple owned language'
}
//for in loop
for (const key in myobj) {console.log(`${key} is shortcut for ${ myobj[key]}`)}
const programming=["js","py","cpp","ruby","swift"]
for (const key in programming) {console.log(`key value of ${key} is ${programming[key]}`)}
