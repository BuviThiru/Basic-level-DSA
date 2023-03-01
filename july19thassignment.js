// 1. Given two sorted arrays. You need to merge them using merge sort
// Input -> a=[1,3,5,6], b=[2,4,7,8,9]
// Output -> [1,2,3,4,5,6,7,8,9]

// let res = []
// function merge(arr1, arr2) {
//     let i = 0, j = 0;

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] <= arr2[j]) {
//             res.push(arr1[i])
//             i++
//         }
//         else {
//             res.push(arr2[j])
//             j++
//         }
//     }
//     while (j < arr2.length) {
//         res.push(arr2[j])
//         j++
//     }
//     while (i < arr1.length) {
//         res.push(arr1[i])
//         i++
//     }
//     console.log(res)
// }
// let arr1 = [1,3,5,6]
// let arr2 = [2,4,7,8,9]
// merge(arr1, arr2)

// 2. Given a linkedlist. You need to sort linkedlist using merge sort
// Input -> [115,110,32,10,3,21]
// Output -> [3,10,21,32,110,115]

function merge(start, mid, mid1, end, arr) {
    let arr1 = [], arr2 = []//left and right array
    for (let i = start; i <= mid; i++) { arr1.push(arr[i]) } //pushed elements into leftarray till mid
    for (let i = mid1; i <= end; i++) { arr2.push(arr[i]) } //pushed elements after mid to right array
    let k = start, i = 0, j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) { arr[k] = arr1[i]; i++; k++ }
        else { arr[k] = arr2[j]; j++; k++ }}
        while (i < arr1.length) { arr[k] = arr1[i], i++, k++ }
        while (j < arr2.length) { arr[k] = arr2[j], j++, k++ }
    return arr
}

function mergeSort(start, end, arr) {
    if (start >= end) {
        return
    }

    let mid = parseInt((start + end) / 2)
    mergeSort(start, mid, arr)
    mergeSort(mid + 1, end, arr)
    merge(start, mid, mid + 1, end, arr)
}
let arr = [115,110,32,10,3,21]
mergeSort(0, arr.length - 1, arr)
console.log(arr)