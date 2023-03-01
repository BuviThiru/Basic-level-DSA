// function multiply(array) {
//     var sum = 1;
//     for (var i = 0; i < array.length; i++) {
//         sum = sum * array[i];
//     }
//     return sum;
// }
// console.log(multiply([1, 2, 3, 4,5,6,7]));



// let num = 100
// let a = 0
// let b = 1
// console.log(a)

// var ans = 1
// while(ans <=num){
// console.log(ans)
// ans = a + b
// a =  b
// b = ans}


// function bombExplode(mat) {
//     let rowl = mat.length - 1
//     let coll = mat[0].length - 1
//     console.log(coll)
//     for (let i = 0; i <= rowl; i++) {
//         for (let j = 0; j <= coll; j++) {
//             if (mat[i][j] === -1) {
//                 mat[i][j] = 0
//                 if (((i - 1) >= 0) && (mat[i - 1][j] !== -1))
//                     mat[i - 1][j]++
//                     console.log(i+1)
//                 if ((i + 1 <= rowl) && (mat[i + 1][j] !== -1))
//                 console.log(rowl)
//                     mat[i + 1][j]++
//                 if (((j - 1) >= 0) && (mat[i][j - 1] !== -1))
//                     mat[i][j - 1]++
//                 if ((j + 1 <= coll) && (mat[i][j + 1] !== -1))
//                     mat[i][j + 1]++

//             }
//         }
//     }

//     console.log(mat)
// }
// bombExplode([[0, 0, 0], [0, -1, 0], [0, 0, 0]])





function targetSum(arr, target) {
    let n = arr.length - 1
    for (i = 0; i <= n; i++) {
        for (j = i + 1; j <= n; j++)
            if (arr[i] + arr[j] == target) {
                console.log(arr[i], arr[j])
            }
    }
}
targetSum([1, 2, 3, 4, 5, 6, 7], 7)