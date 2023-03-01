// 1. Write a program to find the Kth largest element in the array using quick select.
// 2. Given an array. You need to sort an array using the iterative quick sort algorithm
// Input - [3,6,5,2,10]
// Output - [2,3,5,6,10]

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

function quicksort(arr, start, end) {
    if (start >= end) return //base case

    let x = partitionAlgo(arr, start, end)//gives the index of the pivot element

    quicksort(arr, start, x - 1)//left array, from 0 to 1 element before pivot
    quicksort(arr, x + 1, end)//right array, from next elemnt of pivot to end of the array

}
arr = [3,6,5,2,10]
quicksort(arr, 0, arr.length - 1)
console.log(arr)


//#################################################################333

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