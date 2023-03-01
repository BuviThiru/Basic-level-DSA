
// // #######################33 Quick Sort with end element as pivot #######################
// function partitionAlgo(arr, start, end) {

//         let pointer = start//start from the first element of the array
    
//         let pivot = arr[end] //last element of the array is considered as pivot
    
//         for (let i = start; i <= end; i++) {
//             if (arr[i] < pivot) {
//                 let temp = arr[i]
//                 arr[i] = arr[pointer]
//                 arr[pointer] = temp
//                 pointer++
//             }
//         }
//         arr[end] = arr[pointer]
//         arr[pointer] = pivot
//         return pointer //pointer gives the position..
//     }
    
//     function quicksort(arr, start, end) {
//         if (start >= end) return //base case
    
//         let x = partitionAlgo(arr, start, end)//gives the index of the pivot element
    
//         quicksort(arr, start, x - 1)//left array, from 0 to 1 element before pivot
//         quicksort(arr, x + 1, end)//right array, from next elemnt of pivot to end of the array
    
//     }
//     arr = [3, 5, 7, 1, 4, 9, 10, 6, 28, 12, 5, 3, 2]
//     quicksort(arr, 0, arr.length - 1)
//     console.log(arr)


//################# Quick Sort with middle index as Pivot ###################
    function partitionAlgo(arr, start, end) {

        let pointer = start//start from the first element of the array

        let pivotIndex = parseInt((start+end)/2)
    
        let pivot = arr[pivotIndex] //last element of the array is considered as pivot
    
        for (let i = start; i <= end; i++) {
            if (arr[i] < pivot) {
                let temp = arr[i]
                arr[i] = arr[pointer]
                arr[pointer] = temp
                pointer++
            }
        }
        arr[pivotIndex] = arr[pointer]
        arr[pointer] = pivot
        return pointer //pointer gives the position..
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