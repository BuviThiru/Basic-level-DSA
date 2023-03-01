// let arr =[1,5,7,3,1,5,2,6,9,5,0]
// let obj ={}
// for(let i =0;i<arr.length;i++){
//     if(obj[arr[i]]){
//         obj[arr[i]]++
        
//     }
//     else obj[arr[i]]=1
// }
// console.log(obj)


let count =0
function countDigit(input){
 if(input<=0) return count
//  console.log(input,count)
 count =count+1
 input = parseInt(input/10)
 countDigit(input)
}
countDigit(12345)
console.log(count)