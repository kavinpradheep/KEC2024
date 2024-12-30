// array = [10, 20, 30, 40, 50, "KEC", true]
// console.log(array);
// array.forEach((element, index) => {
//     console.log("Index is",element,"and Element is",index)    
// });

//Example 1
// objtype1 = {
//     "FirstName": "Jai",
//     "LastName": "Akash",
//     "Age": 19
// }
// console.log(objtype1)

// objtype1.forEach((key, value) => {
//     console.log(value)
// });

// for(key in objtype1){
//     value = objtype1.key
//     console.log(key, value)
// }

// var a = 10
// console.log(a)
// async b = 20
// console.log(b)

// async function funName(){
//     setTimeout:()=>{
//     return "Hello"
//     },2000
//     console.log(await "Hello")
// }
// arrowfunName = async()=>{
//     setTimeout:()=>{
//     return "KEC"
//     },2000
//     console.log(await "KEC")
// }
// funName()
// arrowfunName()

//*another method
// async function funName(){
//     console.log("Hello!")
// }
// arrowfunName = async()=>{
//     console.log("KEC") 
// }
// funName()
// arrowfunName()

// async function funName(){
//     return await "Hello"
// }
// console.log("KEC")

// arrowfunName = async()=>{
//     return await "KEC"
// }
// funName().then((a)=>{
//     console.log(a)
// })
// console.log(arrowfunName())

function locationfinder(){
    train = 95
    return new Promise((trainArrived, train)=>{
        if(train == 7)
        {
            resolve("Train has Arrived");
        }
        else
        {
            reject("Train has been delayed")
        }
    })
}
locationfinder().then((resolvedMsg)=>{
    console.log(resolvedMsg)
}).catch(function(rejectedMsg){
    console.log(resolvedMsg)
})
