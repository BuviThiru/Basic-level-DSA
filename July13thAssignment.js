//  "1. Implement the selection and insertion sorting algorithms to arrange a sequence of numbers from 1..100 in
// decreasing order. Analyze the time taken by each algorithm.
// 2. Perform the Time complexity analysis of all the two sorting algorithms."

function selectionSort(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        let maxindex = i
        for (let j = i + 1; j < n; j++) {
            if (arr[maxindex] < arr[j]) {
                maxindex = j
            }
        }
        if (maxindex != i) {
            let temp = arr[maxindex]
            arr[maxindex] = arr[i]
            arr[i] = temp
        }
    }
    console.log(arr)
}
selectionSort([69, 5, 68, 72, 43, 57, 37, 39, 27, 75, 86, 91, 93, 47, 67, 98, 36, 30, 14, 9, 63, 65, 16, 61,
    49, 12, 77, 56, 7, 94, 19, 66, 24, 32, 44, 11, 51, 76, 82, 64, 2, 85, 13, 95, 84, 60, 10, 45, 34, 8, 40, 74, 31,
    83, 71, 33, 55, 54, 90, 70, 59, 15, 26, 80, 96, 23, 73, 88, 78, 97, 48, 21, 22, 17, 28, 87, 29, 81, 20, 89, 100,
    1, 6, 35, 53, 25, 52, 42, 79, 62, 50, 38, 4, 18, 46, 92, 58, 41, 99, 3], 100)

    //Time complexity = O(n^2)


//############################ INSERSION SORT ###############################
function insersionSort(arr, n) {
    for (let i = 1; i < n; i++) {
        let x = arr[i]
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] < x) {
                arr[j + 1] = arr[j]
                arr[j] = x
            }
        }
    }
    console.log(arr)
}
insersionSort([69, 5, 68, 72, 43, 57, 37, 39, 27, 75, 86, 91, 93, 47, 67, 98, 36, 30, 14, 9, 63, 65, 16, 61,
    49, 12, 77, 56, 7, 94, 19, 66, 24, 32, 44, 11, 51, 76, 82, 64, 2, 85, 13, 95, 84, 60, 10, 45, 34, 8, 40, 74, 31,
    83, 71, 33, 55, 54, 90, 70, 59, 15, 26, 80, 96, 23, 73, 88, 78, 97, 48, 21, 22, 17, 28, 87, 29, 81, 20, 89, 100,
    1, 6, 35, 53, 25, 52, 42, 79, 62, 50, 38, 4, 18, 46, 92, 58, 41, 99, 3], 100)

//Time complexity = O(n^2)

