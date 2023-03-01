// Given an array , and an index k ,  sort the elements in ascending order , without changing the position of the kth element.

// Input : arr : [1,4,3,8,6,2] , k =2
// Output : [1,2,3,6,8]
 
// function sortExceptK(arr1, k) {
//     let x = arr1[k]
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr1.length - 1 - i; j++) {
//             if (arr1[j] > arr1[j + 1]) {
//                 let temp = arr1[j]
//                 arr1[j] = arr1[j + 1]
//                 arr1[j + 1] = temp
//             }
//         }
//     }
//     console.log(arr1)
//     let res = []
//         for (i = 0; i < arr1.length; i++) {
//             if (i == k) { res.push(x)}
//             if (arr1[i] == x) continue
//             else res.push(arr1[i])
//         }
//         console.log(res)
//     }
//     let arr1 = [3, 5, 6, 7, 1, 9, 2, 12, 8]
//     sortExceptK(arr1, 4)

