// let a = [[1,2,3],[4,9,6]]
// console.log(a.length)
// console.log (a[1][1])
// console.log(a[0].length)

// let x = [
// [2, 3, 4],
// [1, 1, 1]
// ];
// console.log(x.length)  // row count: 2
// console.log(x[0].length) // column count: 3

// console.log ("Diagonal Matrix")
// function diagnalmatrix(dmat) {
//     let totRow = dmat.length
//     let totCol = dmat[1].length
//     if (totCol != totRow) {
//         return false
//     }
//     for (i = 0; i < totRow; i++) {
//         for (j = 0; j < totCol; j++) {
//             let a = dmat[i][j]

//             if ((i == j) && (a == 0))
//                 return false
//             else if ((i != j) && (a != 0))
//                 return false
//         }
//     }
//     return true
// }
// let result = diagnalmatrix([[1, 0, 0], [0, 2, 0], [0, 0, 3]])

// console.log(result)


// console.log ("Sparse Matrix")
// function isSparse(dmat) {
//     let totRow = dmat.length;
//     let totCol = dmat[1].length;
//     let countzero = 0;
//     let y = parseInt(totCol * totRow / 2)

//     for (i = 0; i < totRow; i++) {
//         for (j = 0; j < totCol; j++) {
//             if (dmat[i][j] === 0) {
//                 countzero = countzero + 1
//             }
//         }
//             }
//     if (countzero > y) console.log('Number of zeros is more than the half of the total value count.. So the given matrix is a Sparse matrix')
//     else console.log('Number of zeros is less than the half of the total value count.. So the given matrix is not a Sparse matrix')
// }
//  isSparse([[1, 0, 0], [0, 2, 0], [0, 0, 3]])
//  isSparse([[1, 5, 1], [6, 4, 1], [4, 2, 5]])

// console.log("Sum of Rows")
// function rowsum(addmat) {
//     let summat = []
//         for (i = 0; i < addmat.length; i++) {
//         let sum = 0
//         for (j = 0; j < addmat[0].length; j++) {
//             sum = sum + addmat[i][j]
//         }
//         summat.push(sum)
//     }
//     console.log(summat)
// }
// rowsum([[1, 1, 1], [2, 2, 2], [3, 3, 3]])


// console.log ("Sum of Columns")
// function colsum(addcol) {
//     let summat1 = []
//         for (i = 0; i < addcol[0].length; i++) {
//         let sum = 0
//         for (j = 0; j < addcol.length; j++) {
//             sum = sum + addcol[j][i]
//         }i
//         summat1.push(sum)
//     }
//     console.log(summat1)
// }
// colsum([[1, 5, 1], [6, 4, 1], [4, 2, 5]])

// console.log("Converting 1D Matrix to 2D Matrix")
// let oneDarray = [1,2,3,4,5,6,7,8,9];// output = [[1,2,3],[4,5,6][7,8,9]]
// let twoDarray = [];
// for (let  i = 0; i < oneDarray.length; i++){
//     let tempArray = [ ]
//     for(j = i; j<=i+2; j++){
//         tempArray.push(oneDarray[j])
       
//     }
//     i= i+2    
//     twoDarray.push(tempArray)
   
// }
// console.log (twoDarray)



console.log("Highest Number in each Row")
let max = [
    [1, 22, 3, 4],
    [5, 6, 77 ,8],
    [9, 10, 11, 121]
]
let maxnum = 0
for(i=0; i<=max.length-1; i++){
    for(j=i; j<=max[0].length-1; j++){
         max[i][j]>maxnum ? maxnum = max[i][j] : {}
    }
     console.log(maxnum)  
}