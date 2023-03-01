// Requirements: "1. Take an array of size 10. Calculate sum of all array elements using tail recursion.
// 2. Write a function that takes a string and returns if string is a palindrome."

// function sumOfArray(arr,n){
//     if(n>arr.length-1) return 0 
//     return arr[n]+ sumOfArray(arr,n+1)
// }
// arr = [1,2,3,4,5,6,7,8,9,10]
// console.log (sumOfArray(arr,0))

function stringPalindrome(str, s, e){
    if(s>=e) return true
    // console.log(s,e)
    if(str[s] !== str[e]) return false
     return stringPalindrome(str, ++s, --e)
}
let str = "madams"
let e = str.length-1
console.log(stringPalindrome(str,0,e))