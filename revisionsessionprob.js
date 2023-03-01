// for(let i =0;i<=9;i++){
//     for(let j = 1;j<=10;j++){
//         let s = String(10*i+j)
//         process.stdout.write(" "+s+" ");
//     }
//    console.log("\n")
// }

// for(let i =1;i<=10;i++){
//     for(let j = 0;j<=9;j++){
//         let s = String(j*10+i)
//         process.stdout.write(" "+s+" ");
//     }
//    console.log("\n")
// }

// function maxsumSubarray(arr){
//     let max = arr[0]
//     let current=0 
//     let start = 0;let end=0;s=0
//     for(let i=0;i<arr.length;i++){
//         current = current +arr[i]
//         if(current>max){
//             max = current
//             start = s;end = i
//         }
//         if(current<0){
//             current = 0
//             s= i+1
//         }
//     }
//     console.log(start,end)
//     return max
// }
// let arr = [4,-3,-2,2,3,1,-2,-3,4,2,-6,-3,-1,3,1,2]
// console.log(maxsumSubarray(arr))

// ERROR ##############  function maxProduct(arr, n) {
//     let max = -Infinity
//     let curr = 1
//     for (let i = 0; i < n; i++) {
//         // console.log(arr[i])
        
//         curr = curr * arr[i]
        
//         if (curr > max) {
//             max = curr
//         }
//         if (curr == 0) {
//             curr = 1
//         }
//     }
//     console.log( max) 
// }
// arr = [-1, 2, 3 ,4, 5]
// maxProduct(arr, arr.length)