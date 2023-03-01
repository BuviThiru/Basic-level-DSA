// Requirements: "4' Given an array having 0,1 as input( We need to write a function that sorts the array in ascending
//     order without using inbuilt sort function
//     Input Array -> [0,1,1,0,1,0,0,15
//     Output -> [0,0,0,0,1,1,1,15
//     2) Given 2D Array( A Magic square is a 2D array having n rows and n columns which will be having
//     all elements as distinct and the sum of row, column or diagonal is equal to the same number(
//     You need to check whether that array is a magic square or not("

// let arr = [1, 0, 1, 0, 0, 1, 1, 12]
// function sortarray(arr) {
//     let ans = []
//     for (i = 0; i < arr.length; i++) {
//         if(arr[i] !==0 && arr[i] !==1){
//             return "Unvalid Input"
//             break
//         }

//         if (arr[i] == 1) {
//             ans.push(arr[i])
//         }
//         else ans.unshift(arr[i])
//     }
//         return ans
//     }
//     console.log(sortarray(arr))



function magicSquare(arr1) {
    let ans = 0
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr1[0].length; j++) {
            if (i == j) {
                ans = ans + arr1[i][j]
            }
        }
    }

    for (i = 0; i < arr1.length; i++) {
        let rowsum = 0; colsum = 0
        for (j = 0; j < arr1[0].length; j++) {
            rowsum = rowsum + arr1[i][j]
            colsum = colsum + arr1[j][i]
        }
        if (rowsum !== ans || colsum != ans) { return "Given Matrix is not a magical square"; break }
    }

    return "Given matrix is a Magical Square"


}
  console.log(magicSquare([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
  console.log(magicSquare([[2,7,6], [9,5,1], [4,3,8]]))