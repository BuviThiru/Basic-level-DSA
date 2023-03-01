// Requirements: "1. Write a function that has an implementation of selection sort which is stable.
// (Hint: May be we need to trade off with the benefit of selection sort of less swaps)

// 2. Given an array of strings arr[], sort it in ascending order based upon the frequency of strings. If frequency is same then sort based upon the lexicographical order.

// Input: arr[] = {“abc”, “pqr”, “pqr”, “abc”}
// Output: {“abc”, “pqr”}

// function selectionSort(arr, n) {//selection sore with stability
//     for (let i = 0; i < n - 1; i++) {      
//         for (let j = i+1; j < n; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     console.log(arr)
// }
// let arr =[4, 6, 11, 32, 2, 3,2]
// selectionSort(arr, arr.length)

function stringSort(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        for (var j = i + 1; j < n; j++) {
            if (arr[i].localeCompare(arr[j]) > 0) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }

        }
    }
    let res = []
    for (const key of arr) {
        if (res.includes(key)) { continue }
        else res.push(key)
    }
    console.log(res)
}
let arr = ["azebra", "abc", "pqr", "aaabc", "pqr", "abc", "cat", "horse", "dog"]
stringSort(arr, arr.length)
