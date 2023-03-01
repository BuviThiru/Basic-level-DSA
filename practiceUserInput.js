// npm install prompt-sync done //install this in terminal
// const userinput = require ("prompt-sync") 
// const prompt = userinput()


// let fname = prompt("Enter your first name:")
// let lname = prompt("Enter your Last Name: ")
// console.log(`Your name is 
// "${fname} ${lname}"`)


// let num = prompt("Enter your Array length:" )
// let arr = []
// for(i=1; i<=num;i++){
//     let v = prompt("Enter the value: ")
//     arr.push(Number(v))
// }

// console.log(arr)


//############METHOD 2

// const userinput = require ("readline")

// const rl = userinput.createInterface({
//     input: process.stdin,
//     output : process.stdout
// }
// )

// // rl.question("What is your first Name:",(result) =>{
    
// //   console.log(`Your first name is :${result}`)

// //     rl.close()
// // })


// rl.question("What is your name?\n", function (name){ //Question has two parameters..first is a string/question, second is a function with parameter which stores the result
// rl.question("What is your age?\n", function ( age){
//     console.log(`Hi ${name}!!!!!. 
// Your age is ${age}`)
//     rl.close()
// })
// })

const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
 r1.question("What is your name ? ",function(name){
    console.log(`your name is ${name}`);
    r1.close();
 })

