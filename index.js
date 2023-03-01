// let x = 1
// console.log(x)

// let k =2;n=6
// for(var i=0;i<n;i++){ 
//     i*=k
//     console.log(i)
// }

let start = 0
let end = 8
for(let i =0;i<end+2;i++){
   let c =  start+ parseInt(Math.random()*(end+1)-start)
   console.log(c)
}