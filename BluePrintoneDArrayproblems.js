/*
1.sum of array
2.sum of even numbers
removing duplicates
smallest number in the array
greatest number in the array
product of before ,current and after numbers
separating positive and negative
reverse the given array
cyclic rotation of the given array

*/

// const nums = [12, 45, 67, 11, 44, 23];
// var sum = 0
// for (i = 0; i < nums.length; i++)
//     if (nums[i] % 2 == 0) {
//         sum = sum + nums[i]
//     }
// console.log(sum)

/* problem -- find sum of even numbers
const num = [12, 45, 67, 11, 44, 23]
let sum = 0;
for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
        sum = sum + num[i];
    }
}
// console.log(sum);*/
// //***Removing Duplicates */
// let rep = [8, 6, 3, 8, 1, 2, 3, 8, 9, 2, 1];
// let rep1 = [ ];
// for (let i = 0; i <= rep.length; i++) {
//     if (rep.indexOf(rep[i])  !== i ){
//     }
//         else { rep1.push(rep[i]) }

//     }

//     console.log(rep1)


//    let small = [3,5,8,5,1,7,6]
// let temp = small[0]
// for (let i = 0; i<=small.length; i++) {
   
//     if (small[i] < temp ){
//       temp = small[i] 
//     }
   
// }
// console.log (temp)




// let greater = [23,46,50,69,80,90,12,6]
// let great = greater[0]
// for (i = 0; i<= greater.length; i++) {

// (great <  greater[i]) ? great = greater[i] : great = great
// }
// console.log (great)


//****Sortin - bubble sort */
// let arr = [2,3,4,5,6,7]
// n = arr.length-1
// for(i=0;i<=n-1;i++){
//     for(j=0;j<=n-i-1; j++)//-i because we need not reach last positio 
//     if(arr[j]>arr[j+1]){
//         temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1]= temp
//     }
// }
// console.log(arr)

//**********finding n largest element */

let arr1 = [2,3,4,5,6,7]
n1 = arr1.length-1
n=2
function nLargestelement(arr,n1,n){
    for(i=0;i<=n1-1;i++){//-1 because we need not reach last positio 
        for(j=0;j<=n1-i-1; j++)
        if(arr1[j]>arr1[j+1]){
            temp = arr1[j]
            arr1[j] = arr1[j+1]
            arr1[j+1]= temp
        }
    }
   return arr1

}
let sortedArray= nLargestelement()
console.log(nLargestelement())
console.log(`Second largest element = ${sortedArray[sortedArray.length-2]}`)


//**************product of before ,current and after numbers */
let a = 1
let product = 1
let productArray = []
let simpleArray = [2, 4, 6, 5, 3, 7, 8]
for (i = 0; i < simpleArray.length; i++) {
    if (i + 1 == simpleArray.length) 
        { product = a * simpleArray[i] }
    else {
        product = a * simpleArray[i] * simpleArray[i + 1]
        a = simpleArray[i]
    }
    productArray.push(product)

}
console.log(productArray)


// //***********speparating positive and negative numbers */

// let mixedArray = [2,-5,8,-3,4,9,-7, 3];
// let sortedArray = [ ];

// for (let i = 0; i< mixedArray.length; i++)
// if (mixedArray[i]<0){
//  sortedArray. push(mixedArray[i])
// }
// else {
//      sortedArray. unshift(mixedArray[i])
//     }
// console.log (sortedArray)

//Reverse the given array
// let num =[2,4,6,7,8]
// start = 0
// end = num.length-1
// while(start<=end){
// temp = num[start]
// num[start] = num[end]
// num[end]= temp
// start++
// end--
// }
// console.log(num)

//rotate the given array -cyclic
let num =[2,4,6,7,8]
start = 0
end = num.length-1
while(start<=end){
temp = num[end]
num[end] = num[start]
num[start] = temp
start++
}
console.log(num)
//################## Reversing subarray makes the array sorted##########
// function subarrayReverse(array) {
//     let temp = [...array]
//     temp = temp.sort()
//     // console.log(array)
//     // console.log(temp)
//     for (start = 0; start <= array.length - 1; start++) {
//         if (array[start] != temp[start]) {
//             break
//         }
//     }
//     for (end = array.length - 1; end >= 0; end--) {
//         if (array[end] != temp[end]) {
//             break
//         }
//     }
//     if (start >= end) {
//         return "Already Sorted" }
//         do {
//             start++
//             if (array[start - 1] < array[start]) {
//                 return false;
//                 break
//             }

//         } while (start != end)

//         return true
//     }
//     console.log(subarrayReverse([1, 2, 4, 6, 3, 5]))
//     console.log(subarrayReverse([1, 2, 5, 4, 3, 6, 9]))
//     console.log(subarrayReverse([1, 2, 3, 4, 5, 6, 7, 8, 9]))


// missing+repeated
// do not use sorting algo 
// var num = [5, 1, 2, 3, 1]

// var obj = {}

// for (let i = 1; i <= 5; i++) {
//     obj[i] = 0
// }
// console.log(obj)

// num.forEach(function (item) {
//     obj[item] += 1
// })
// console.log(obj)

// for (const key in obj) {
//         if (obj[key] === 0 ) {
//         console.log (`Missing number in the array is ${key}`)}
//         else if(obj[key]>1){
//         console.log (`Repeated number in the array is ${key}`)
//     }
// }

// function secondLarge (arr){
//     arr.sort((a,b ) => b-a)
//     console.log(arr)
//     for(i=0; i<arr.length;i++)
//    if (arr[i] != arr[i+1] ) {console.log(arr[i+1]); return}

// }
// secondLarge([2,5,7,8,3,8])

function minMAx(arr,n){
    let min = Infinity
    let max = -Infinity
    for(let i=0;i<=n;i++){ 
      if(arr[i]<min){
           min = arr[i]
      }
      if(arr[i]>max){
        max = arr[i]
      }
}
console.log(min,max)
}
arr = [2,3,7,-1,-7,5,17,8,9]
minMAx(arr,arr.length-1)