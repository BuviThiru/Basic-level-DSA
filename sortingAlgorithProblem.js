// //############################## Finding Kth Element - Bubble sort ######################
// function bubbleSort(arr,n,k){
//     let i,j;
// for( i =0;i<k;i++){

//     for( j =0;j<n-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }    
//     }
// }
// console.log(arr[j])
// }
// bubbleSort([12,6,2,9,15,23,7,1,8],9,3)

//#################Finding Kth element selction Sort##########################
// function selectionSortKthElement(arr, n, k) {
//     let i, j;
//     for (i = 0; i < k; i++) {
//         let maxIndex = i
//         for (j = i + 1; j <= n - 1; j++) {
//             if (arr[maxIndex] < arr[j])
//                 maxIndex = j
//         }
//         if (maxIndex != i) {
//             let temp = arr[i]
//             arr[i] = arr[maxIndex]
//             arr[maxIndex] = temp
//         }
//     }
//     console.log(arr[k - 1])
// }
// selectionSortKthElement([12, 6, 2, 9, 15, 23, 7, 1, 8], 9, 3)


// //####################### Merge 2 Sorted Array#########################
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
// let arr1 = [1, 3, 5, 7, 8, 9]
// let arr2 = [2, 4, 6, 10]
// merge(arr1, arr2)


// // ####################Median from two array
// function medianfromTwoSortedArray(arr1, arr2, n) {
//     let mid1 = 2*(n - 1) / 2
//     let mid2 = mid1 + 1
//     count = 0
//     let i = 0, j = 0; let sum = 0
//     while (i < n && j < n) {

//         if (arr1[i] <= arr2[j]){ 
//             i++
//             count++
//             if (count == mid1) { sum = sum + arr1[i] }
//             if (count == mid2) { sum = sum + arr1[i]; break }}
//         else {
//             j++
//             count++
//             if (count == mid1) { sum = sum + arr2[j] }
//             if (count == mid2) { sum = sum + arr2[j]; break }
//         }      
//     }
//     console.log(`Median = ${sum / 2}`)
// }
//     let arr1 = [1,3,5,7,9,11]
//     let arr2 = [2,4,6,8,10,12]
//     medianfromTwoSortedArray(arr1, arr2, 5)


// function isDigitSumPalindrome(N){
//     let sum = 0
//   while(N !=0){
//       sum = sum + N%10
//       N = parseInt(N/10)
//   }
//   console.log(sum)
//   let str = ""
//   While (sum !=0){
//       str = str + sum%10
//       sum = parseInt(sum/10)
//   }
//   console.log(sum,str)
// }
// isDigitSumPalindrome(56)





// // bubbleSortNumberOfInversions([60,4,6,11,32,12,3],6)

//  function bubbleSortNumberOfInversions(arr,n){
//     var count = 0
//     for(let i =0;i<n-1;i++){
//         for(let j =0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//                 count++
//             }
//         }
//     }
//     console.log(arr,count)
//     }
//     bubbleSortNumberOfInversions([4,6,11,32,12,3],6)

//############## Inversion count Merge Sort########################
// let inversioncount = 0
// function merge(start, mid, mid1, end, arr) {
//     let arr1 = [], arr2 = []//left and right array
//     for (let i = start; i <= mid; i++) { arr1.push(arr[i]) } //pushed elements into leftarray till mid
//     for (let i = mid1; i <= end; i++) { arr2.push(arr[i]) } //pushed elements after mid to right array
//     let k = start, i = 0, j = 0
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] <= arr2[j]) { arr[k] = arr1[i]; i++; k++ }//if element is small in arr1 pushes to arr
//         else {inversioncount += (arr1.length-i)  //if arr1[i]> arr2[j]..it means all the remaining element is also great
//             ;arr[k] = arr2[j];
//              j++; 
//              k++ }} //if element is small in arr2 pushes to arr
//     while (i < arr1.length) { arr[k] = arr1[i], i++, k++ }//If any element remains without comparision 
//     while (j < arr2.length) { arr[k] = arr2[j], j++, k++ }
//     return arr
// }

// function mergeSort(start, end, arr) {
//     if (start >= end) {
//         return
//     }

//     let mid = parseInt((start + end) / 2)
//     mergeSort(start, mid, arr)
//     mergeSort(mid + 1, end, arr)
//     merge(start, mid, mid + 1, end, arr)
// }
// let arr = [5,9,4,6,2]
// mergeSort(0, arr.length - 1, arr)
// console.log(arr)
// console.log(inversioncount)

//####################### inverse the count if if valie is 2 times greater
// let inversioncount = 0
// function merge(start, mid, mid1, end, arr) {
//     let arr1 = [], arr2 = []//left and right array
//     for (let i = start; i <= mid; i++) { arr1.push(arr[i]) } //pushed elements into leftarray till mid
//     for (let i = mid1; i <= end; i++) { arr2.push(arr[i]) } //pushed elements after mid to right array
//     let k = start, i = 0, j = 0
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] <= arr2[j]) { arr[k] = arr1[i]; i++; k++ }//if element is small in arr1 pushes to arr
//         else {
//             if(arr[i]>2*arr[j]){ 
//             inversioncount += (arr1.length-i)} ; //if arr1[i]> arr2[j]..it means all the remaining element is also great
//             arr[k] = arr2[j];
//              j++; 
//              k++ }} //if element is small in arr2 pushes to arr
//     while (i < arr1.length) { arr[k] = arr1[i], i++, k++ }//If any element remains without comparision 
//     while (j < arr2.length) { arr[k] = arr2[j], j++, k++ }
//     return arr
// }

// function mergeSort(start, end, arr) {
//     if (start >= end) {
//         return
//     }

//     let mid = parseInt((start + end) / 2)
//     mergeSort(start, mid, arr)
//     mergeSort(mid + 1, end, arr)
//     merge(start, mid, mid + 1, end, arr)
// }
// let arr = [5,9,4,6,2]
// mergeSort(0, arr.length - 1, arr)
// console.log(arr)
// console.log(inversioncount)

//################# Partition Algorithm ######################
// function lessernGreaterArrange(arr,n,target){
//     let end = 0 // everything smaller than target will be pushed before end
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


// function lessernGreaterArrange(arr,n,pivot){
//     let end = 0
//     for(let i =0;i<n;i++){
//         if(arr[i]<=pivot){
//             let temp = arr[i]
//             arr[i] = arr[end]
//             arr[end]= temp
//             end++
//         }
//     }
// console.log(arr)
// }
// arr = [3,17,5,7,2,3,9,10,12,15,8]

// lessernGreaterArrange(arr,arr.length,1)


//#########################33 Kth Element by Quick Sort  ///INCOMPLETE

// function partitionAlgo(arr, start, end) {
    
//     // let pointer = start//start from the first element of the array
//     let mid = parseInt((start+end)/2)

//     let pivot = arr[mid] //last element of the array is considered as pivot
//   while(start<end) {
//         if(arr[start] <pivot) {start++}
//         if(arr[end]>pivot){end--}
//         if(arr[start]>pivot){
//             let temp = arr[start]
//             arr[start] = arr[end]
//             arr[end] = temp
//         }        
//     }    
//     return start-1 //pointer gives the position..so pointer-1 gives the index
// }

// function quicksort(arr, start, end) {
//     if (start >= end) return //base case

//     let x = partitionAlgo(arr, start, end)//gives the index of the pivot element

//     quicksort(arr, start, x - 1)//left array, from 0 to 1 element before pivot
//     quicksort(arr, x + 1, end)//right array, from next elemnt of pivot to end of the array

// }
// arr = [3, 5, 7, 1, 4, 9, 10, 6,28,12,5,3,2]
// quicksort(arr, 0, arr.length-1)
// console.log(arr)



// function medianfromTwoSortedArray(arr1, arr2, n) {
//     let mid1 = 2*(n - 1) / 2
//     console.log(mid1)
//     let mid2 = mid1 + 1
//     count = 0
// console.log(mid1,mid2)
//     let i = 0, j = 0; let sum = 0
//     while (i < n && j < n) {

//         if (arr1[i] <= arr2[j]){
//           console.log("if",count)
//             count++
//             if (count-1 == mid1) { sum = sum + arr1[i] };
//             if (count-1 == mid2) { sum = sum + arr1[i]; break };
//             i++;
//         }
              
//         else {
//             console.log("else",count)
//             count++;
//             if (count-1 == mid1) { sum = sum + arr2[j] };
//             if (count-1 == mid2) { sum = sum + arr2[j]; break };
//             j++
//         }
//     }
//     console.log(`Median = ${sum / 2}`)
// }
//     let arr1 = [1,3,5,7,9,11]
//     let arr2 = [2,4,6,8,10,12]
//     medianfromTwoSortedArray(arr1, arr2, 6)


// //######################## Kth Smallest Element############################33

// function partitionAlgo(arr, start, end) {

//     let pointer = start//start from the first element of the array

//     let pivot = arr[end] //last element of the array is considered as pivot

//     for (let i = start; i <= end; i++) {
//         if (arr[i] <= pivot) {
//             let temp = arr[i]
//             arr[i] = arr[pointer]
//             arr[pointer] = temp
//             pointer++
//         }
//     }
//     return pointer - 1 //pointer gives the position..so pointer-1 gives the index
// }

// function kthSmallestElementquicksort(arr, start, end,k) {
//     if(k<0||k>arr.length){return -1} //base case

//     let x = partitionAlgo(arr, start, end)//gives the index of the pivot element

//     if(x==k-1) return((arr[x]))
//     else if(k-1<x){ 
//       return kthSmallestElementquicksort(arr, start, x - 1,k)}//left array, from 0 to 1 element before pivot
//     else return kthSmallestElementquicksort(arr, x + 1, end,k)//right array, from next elemnt of pivot to end of the array

// }
// arr = [1,2,3,4,5,6,7,8,9]
// console.log(kthSmallestElementquicksort(arr, 0, arr.length - 1,2))
// console.log(arr)

//######################## Kth Largest Element############################33

function partitionAlgo(arr, start, end) {

    let pointer = start//start from the first element of the array

    let pivot = arr[end] //last element of the array is considered as pivot

    for (let i = start; i <= end; i++) {
        if (arr[i] <= pivot) {
            let temp = arr[i]
            arr[i] = arr[pointer]
            arr[pointer] = temp
            pointer++
        }
    }
    return pointer - 1 //pointer gives the position..so pointer-1 gives the index
}

function kthLargestElementquicksort(arr, start, end,k) {
    
    if(k<0||k>arr.length){return -1} //base case

    let x = partitionAlgo(arr, start, end)//gives the index of the pivot element

    if(x==k-1) return((arr[x]))
    else if(k-1<x){ 
      return kthLargestElementquicksort (arr, start, x - 1,k)}//left array, from 0 to 1 element before pivot
    else return kthLargestElementquicksort(arr, x + 1, end,k)//right array, from next elemnt of pivot to end of the array

}
arr = [2,5,1,4,23,51]
console.log(kthLargestElementquicksort(arr, 0, arr.length - 1,arr.length-1)) //-1 because to get the position and not index
console.log(arr)

