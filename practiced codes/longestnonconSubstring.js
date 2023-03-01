// function longestNonConsequtiveSubseq(str) {
//     let longest = 1
//     let count = 1
//     let len = str.length - 1
//     for (let i = 1; i <= len; i++) {
//         if (str[i] != str[i - 1]) {
//             count++
//             // console.log(count)
//         }
//         else {
//             longest = Math.max(longest, count)
//             count = 1
//         }

//     }
//     longest = Math.max(longest, count)//ecause last count will not be updated
//     return longest
// }
// console.log(longestNonConsequtiveSubseq("abcdefgh"))



function sumOfArrayDigitsIncre1(arr) {
    for (i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 9) {
            arr[i]++
            return arr
        } 
        else {
            arr[i] = 0
        }
    }
        let res = new Array(arr.length+1)
         res[0] = 1
         for(let i = 1;i<res.length;i++){
            res[i]=0
         }
         return res
  
}
console.log(sumOfArrayDigitsIncre1([9, 9, 9]))