// Requirements: "1. Given an array. You need to find a triplet that will be having sum as a target. A Triplet is a set of 3 numbers.
// Input - [3,6,5,2,10]
// Target - 11
// Output - [3,6,2]
// 2. Write a program to sort the elements in the array by descending order using a random pivot.

function tripletTagetSum(arr,target){
    arr.sort((a,b )=> a-b)
    console.log(arr)
    let res = []
    for(let i =0;i<arr.length;i++){
         
        let sum = target -arr[i]
        let start = i+1
        let end = arr.length-1
    
        while(start<end){
            if(arr[start]+arr[end]==sum){
                let temp = [] 
             temp.push(arr[i],arr[start],arr[end])
             res.push(temp)
             start++;
             end--
            }
            else if((arr[start]+arr[end])<sum){
                start++
            }
            if((arr[start]+arr[end])>sum){
                end--
            }
        }
    }
console.log(res)
}
let arr = [3,6,1,9,4,5,7,10,2]
tripletTagetSum(arr,9)


// #######################################333

function getRandomNumber(start,end){//function to get random num
    let randomIndex = parseInt( Math.random()*(end-start) +start) //random num will be between 0 n 1(1 is not included)..so added with min n multiplied with diff
    return randomIndex

}
function partitionAlgo(arr, start, end){

let randomIndex = getRandomNumber(start, end+1) // end+1 because last digit is not included by Meth.random

swap(arr,randomIndex,end)  //Pivot element is shifted to the end

let pivot = arr[end] //last element of the array is considered as pivot
let pointer = start

for (let i = start; i <= end; i++) {
if (arr[i] <= pivot) {
let temp = arr[i]
arr[i] = arr[pointer]
arr[pointer] = temp
pointer++ //pointer is incremented even after swapping pivot...pivot as it is at the end its the ;last element to be swapped
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
arr = [3, 5, 7, 1, 4, 9, 10, 6, 28, 12, 5, 3, 2]
quicksort(arr, 0, arr.length - 1)
console.log(arr)