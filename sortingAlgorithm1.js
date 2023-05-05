// // //###################     BUBBLE SORT   #######################
// function bubbleSort(arr, n) {
//     for (let i = 0; i < n - 1; i++) {//runs till n-1 time because at last iteration the first element will be swaped by itself
//         for (let j = 0; j < n - i - 1; j++) {//n-1 because we are using(j+1); 
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     console.log(arr)
// }
// bubbleSort([4, 6, 11, 32, 12, 3], 6)


// //############## OPtimized version of bubble sort
// function bubbleSort(arr, n) {
//     for (let i = 0; i < n - 1; i++) {
//         let isSwaped = true
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//                 isSwaped = false
//             }
//         }
//         if (isSwaped == true) { return arr } 
//     }
//     console.log("sorted")
//     return arr
// }
// console.log(bubbleSort([1, 2, 3, 4, 5, 6], 6))

//###################     SELECTION SORT   #######################
// function selectionSort(arr, n) {
//     for (let i = 0; i < n - 1; i++) {
//         let minindex = i
//         for (let j = i + 1; j < n; j++) {
//             if (arr[minindex] > arr[j]) {
//                 minindex = j
//             }
//         }
//         if (minindex != i) {
//             let temp = arr[minindex]
//             arr[minindex] = arr[i]
//             arr[i] = temp
//         }
//     }raa
//     console.log(arr)
// }
// selectionSort([4, 6, 11, 32, 2, 3], 6)


//############################ INSERSION SORT ###############################
// function insersionSort(arr, n) {
//     for (let i = 1; i < n; i++) {//6, 11
//         let x = arr[i]//6 //stored in x n the previous element is moved to its position
//         let j = i-1
//         while(j>=0 && arr[j]>x){// goes to check the previous element..so i-1
//         arr[j+1]= arr[j]// pushes the elements till x reaches its place
//         j--
//         }
//         arr[j+1] = x
//     }
//     console.log(arr)
// }
// insersionSort([30, 6, 11, 52, 2,7,3,1,60], 9)




// #################### MERGE SORT ##################################
// function merge(start, mid, mid1, end, arr) {
//     let arr1 = [], arr2 = []//left and right array
//     for (let i = start; i <= mid; i++) { arr1.push(arr[i]) } //pushed elements into leftarray till mid
//     for (let i = mid1; i <= end; i++) { arr2.push(arr[i]) } //pushed elements after mid to right array
//     let k = start, i = 0, j = 0
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] <= arr2[j]) { arr[k] = arr1[i]; i++; k++ }//if element is small in arr1 pushes to arr
//         else { arr[k] = arr2[j]; j++; k++ }} //if element is small in arr2 pushes to arr
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
// let arr = [30,90,50,60,10,70,20,80,100,10,40]
// mergeSort(0, arr.length - 1, arr)
// console.log(arr)


//########################### MERGE ALGORITHM without Extra Space########################

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

//#####################33 QUICK SORT #######################

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

// function quicksort(arr, start, end) {
//     if (start >= end) return //base case

//     let x = partitionAlgo(arr, start, end)//gives the index of the pivot element

//     quicksort(arr, start, x - 1)//left array, from 0 to 1 element before pivot
//     quicksort(arr, x + 1, end)//right array, from next elemnt of pivot to end of the array

// }
// arr = [3, 5, 7, 1, 4, 9, 10, 6, 28, 12, 5, 3, 2]
// quicksort(arr, 0, arr.length - 1)
// console.log(arr)

//#######################OTher verion of QuickSort#####################33
// function swap(arr, x, y){
//     let temp = arr[x];
//     arr[x] = arr[y];
//     arr[y] = temp;
// }
// function partition(arr, start, end){
//     let pivot = arr[end];
//     let smaller = start; //every element less than pivot is on left side of smaller

//     for(let i = start; i < end; i++){
//         if(arr[i] < pivot){
//             swap(arr, i, smaller);
//             smaller++;
//         }
//     }
//     //place pivot at it's correct position
//     swap(arr, end, smaller);
//     return smaller;
// }

// function quickSort(arr, start, end){ 
//     if(start >= end){
//         return;
//     }

//     let pivotIdx = partition(arr, start, end);
//     quickSort(arr, start, pivotIdx-1);//left part
//     quickSort(arr, pivotIdx+1, end);//right part
// }

// let arr = [7, 3, 1, 2, 9, 6, 8, 4, 5];
// console.log(arr);
// quickSort(arr, 0, 8);
// console.log(arr);


//######################## Quicksort With Random Pivot############################ (Will work only for array without duplicates)
//   function getRandomNumber(start,end){//function to get random num
//         let randomIndex = parseInt( Math.random()*(end-start) +start) //random num will be between 0 n 1(1 is not included)..so added with min n multiplied with diff
//         return randomIndex
    
//     }

// function partitionAlgo(arr, start, end) {
   
  
//     let pivotIndex = getRandomNumber(start,end+1)
   
//     let pivot = arr[pivotIndex]  //Random number is taken as pivot

//    while(start<end){
//     if(arr[start]<pivot){ start++} //have taken two pointer start n end
//     if(arr[end]>pivot){end--}
//     if(arr[start]>=pivot) {let temp = arr[start]; arr[start]= arr[end];arr[end]=temp}
//     }
   
//     return start
// }

// function quicksort(arr, start, end) {
//     if (start >= end) return //base case

//     let x = partitionAlgo(arr, start, end)//gives the index of the pivot element

//     quicksort(arr, start, x - 1)//left array, from 0 to 1 element before pivot
//     quicksort(arr, x + 1, end)//right array, from next elemnt of pivot to end of the array

// }
// arr = [10,12,46,9,11,23,8,7,1,6,5,3,4,2]
// quicksort(arr, 0, arr.length - 1)
// console.log(arr)


//####################################### Quick Sort with RandomIndex ..Random Pivot is shifted to end and it works for duplicates ##########################
 
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