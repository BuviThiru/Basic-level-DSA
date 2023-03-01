// // 1: Can we devise a modification to merge sort where we can make it inplace.

// function merge(arr, start, mid, end) {
//     let leftstart = start
//     let rightstart = mid+1
//     if(arr[mid]<arr[mid+1]) return
//     while(leftstart<=mid && rightstart<=end){ 
//      if(arr[leftstart]<=arr[rightstart]) leftstart++
//      else{
//          let temp = arr[rightstart]
//          for(i=rightstart;i>=leftstart;i--){
//             arr[i]=arr[i-1]
//          }
//          arr[leftstart]=temp
//          leftstart++
//          rightstart++
//          mid++
//      }
//     }
// }
// function mergeSortAlgo(arr, start, end) {
//     if (start >= end) return
//     let mid = parseInt((start + end) / 2)
//     mergeSortAlgo(arr, start, mid)
//     mergeSortAlgo(arr, mid + 1, end)
//     merge(arr, start, mid, end)
// }
// let arr = [30, 10, 40, 70, 90, 80, 20, 50, 60]
// mergeSortAlgo(arr, 0, arr.length - 1)
// console.log(arr)


// // 2. Convert an array into another array where each element will be replaced with the number of elements that 
// // are smaller on the right side of the array to the element

// function lessernGreaterArrange(arr,n,target){
//     let end = 0
//     for(let i =0;i<n;i++){
//         if(arr[i]<target){
//             let temp = arr[i]
//             arr[i] = arr[end]
//             arr[end]= temp
//             end++
//         }
//     }
// console.log(arr)
// }
// arr = [3,17,5,7,2,3,9,10,12,15,1]
// lessernGreaterArrange(arr,arr.length,8)

