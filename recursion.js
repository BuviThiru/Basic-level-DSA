
// function printUpto(s,e) {
 
//     if (s > e) return
//     else {

//         console.log(s)
//         printUpto(s+1,e)
//     }
// }
// printUpto(1,10)


// function printInReverse(num1){
//     if (num1 == 0 ) return
//     else {
//         console.log(num1)
//         printInReverse(num1-1)
//     }
// }
// printInReverse(10)

// function printStar(s,e){
//     if(s>e) return
//     else{
//         console.log(" * ".repeat(s))
//         printStar(s+1,e)

//     }
// }
// printStar(1,7)


// function reverseTriangle(num){
//     if(num==0) return
//     else{
//         console.log(" * ".repeat(num))
//         reverseTriangle(num-1)
//     }
// }
// reverseTriangle


// function factorial(num){
//     if(num ==1 || num == 0) return 1
//     else{
//         return  num*factorial(num-1)
//     }

// }
// console.log(factorial(5))

// function sum(num,total){
//     if(num == 0) return total
// else {
//       return sum(num-1, total = total+(num) ) }
// }
// console.log(sum(5,0))
// console.log(sum(6,0))

// function printeven(s,n){
//     if (s>n) return
//     if(!(s%2)) console.log(s)
//     printeven(s+1,n)
// }
// printeven(1,20)

// function printeven(s,n){
//     if (s>n) return
//     if(!(s%2)) console.log(s)
//     printeven(s+1,n)
// }
// printeven(1,20)


// function oddNumber(s,e){
//     if(s>e) return
//     if(s%2) console.log(s)
//     oddNumber(s+1,e)
// }
// oddNumber(1,10)


// function power(b,e){
//     if (e==0) return 1
//     else return b * power(b,e-1)
// }
// console.log(power(2,3))
// console.log(power(5,3))


// function sum_in_range(n,total){
//     if(n==0){ console.log( total) ; return }
//     else{
//     sum_in_range(n-1,n+(total))}
// }
// sum_in_range(5,0)


// function sum_in_range(n,total){
//     if(n==0){return total}
//     else{
//    return sum_in_range(n-1,n+(total))}
// }
// console.log(sum_in_range(5,0))

// function table7(i, pro , t ){
//     if(i<1) return
//     table7 (i-1, t*(i-1) ,t )
//      console.log(`${i}* ${t} = ${pro}`)// this will be pending line..will be executed at last in reverse
// }
// table7(10,1,7)

// function table7(i, t ){
//         if(i>10) return
//         console.log(`${i}* ${t} = ${i*t}`)
//         table7 (i+1 ,t )
//     }
//     table7(1,7)



// ###########Variation in Printing pendingstatement


// function printnum(s,e){ //prints 9 to 1 in reverse because console.log is kept as pending statement in stack n after final statement its consoled from last
//     if(s==e)return
//     printnum(s+1,e)
//     console.log(s)
// }
// printnum(1,10)

// function printnum(s,e){ //prints 1 to 9..because it calls the function after printing
//     if(s==e)return
//     console.log(s)
//     printnum(s+1,e)
// }
// printnum(1,10)



// function suminrange(a,b){//other way
//     if(a>b) return 0
//     return a+suminrange(a+1,b);
//   }
//   console.log(suminrange(0,5))


// function printeven(n){//print even with 1 parameter
//     if (n==0) return
//     printeven(n-1)
//     if(!(n%2)) console.log(n)
//  }
// printeven(20)


// Write a function called sum_in_range which will take a number and return the sum of all numbers from 1 up to the number p
// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

// function gcdRecursion(a,b){ 
// let n
// a>b?  n =b : b=n
// if(n==1) return
// else if(a%n ==0 && b%n ==0) return n

// }


// Write a JavaScript program to compute the sum of an array of integers.
// Example: var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21

function sumArray(arr,n){
    if(n<0) return 0
    return arr[n]+sumArray(arr,n-1)
}
let arr = [1, 2, 3, 4, 5, 6]
console.log(sumArray(arr,arr.length-1))



// function sumOfDigits(num){
// if (num == 0) return 0
// return (num%10)+sumOfDigits(parseInt(num/10))
// }
// console.log(sumOfDigits(123))




// function checkIfArrayIsSorted(arr, n){
//     if( n==0) {return true}
//        if(arr[n]<=arr[n-1]) return false
//     return checkIfArrayIsSorted(arr,n-1)
// }
// console.log(checkIfArrayIsSorted([1,2,3,5,4],4))
// console.log(checkIfArrayIsSorted([6,2,3,4,5],4))
// console.log(checkIfArrayIsSorted([1,6],1))


// function fibonacci (n){
// if (n==0) return 0
// if (n==2 || n==1) return 1
// return fibonacci(n-2)+fibonacci(n-1)
// }
// console.log(fibonacci(5))

// //to print fibonacci till n

// let n =5
// for(let i=0;i<=n;i++){
//     console.log(fibonacci(i))
// }


function product(arr, i) {
    if (i === 0) return arr[i];
    return arr[i] * product(arr, i - 1);
  }
  let arr = [1, 2, 3, 4];
  console.log(product(arr, arr.length - 1));


  function product1(arr1,i){
    if(i==arr1.length-1) return arr[i];
    return arr[i]*product1(arr1,i+1)
  }
  let arr1 = [1,2,3,4]
  console.log(product1(arr1,0))



// 1. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2. Write a JavaScript program to compute the sum of an array of integers.
//  Example: var array = [1, 2, 3, 4, 5, 6]
//  Expected Output : 21 (edited) 










