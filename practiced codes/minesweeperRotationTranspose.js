

function bombExplode(mat) {

    let rowl = mat.length - 1
    let coll = mat[0].length - 1
    console.log(coll)

    for (let i = 0; i <= rowl; i++) {
        for (let j = 0; j <= coll; j++) {
            if (mat[i][j] === -1) {

                if (((i - 1) >= 0) && (mat[i - 1][j] !== -1))
                    mat[i - 1][j]++
                    console.log(i+1)
                if ((i + 1 <= rowl) && (mat[i + 1][j] !== -1))
                console.log(rowl)
                    mat[i + 1][j]++
                if (((j - 1) >= 0) && (mat[i][j - 1] !== -1))
                    mat[i][j - 1]++
                if ((j + 1 <= coll) && (mat[i][j + 1] !== -1))
                    mat[i][j + 1]++
            }
            mat[i][j] = 0
        }
    }
    console.log(mat)
}
bombExplode([[0, 0, 0], [0, -1, 0], [0, 0, 0]])






// console.log("Rotation by 90 degree - clockwise")
// let arry = [ [1,2,3],
//              [4,5,6],
//              [7,8,9]
// ]
// let outputarry = []
// for (i=0; i<=arry[1].length-1;i++) { //as column value needs to be constant , i is used for column
//     let temp = []
// for (j=arry.length-1; j>=0; j--){
//     // console.log(j)
//        temp.push(arry[j][i])
// }
// outputarry.push(temp)
// }
// console.log(outputarry)

// console.log("Rotation by 90 degree - clockwise")
// let arry = [ [1,2,3],
//              [4,5,6],
//              [7,8,9]
// ]
// let outputarry = []
// let cs = 0
// while(cs <=arry.length-1){
//     temp = []
//     for (i=arry.length-1;i>=0;i--){
//     temp.push(arry[i][cs])
//    }
//     cs++
//     outputarry.push(temp)
// }
// console.log(outputarry)

// console.log("Transpose of Matrix")
// let arr = [[1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]]

// for (let i = 0; i <= arr.length - 1; i++) {
//     for (let j = i; j <= arr[1].length - 1; j++) { //j =i because we should not touch the swiped ones in next column
//         let temp = arr[i][j]
//         arr[i][j] = arr[j][i]
//         arr[j][i] = temp
//     }
//   }
// console.log(arr)


// console.log("Rotating Array by 90 - clockwise without extra Space")
// let arr = [[1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]]

// for (let i = 0; i <= arr.length - 1; i++) {
//     for (let j = i; j <= arr[1].length - 1; j++) { //j =i because we should not touch the swiped ones in next column
//         let temp = arr[i][j]
//         arr[i][j] = arr[j][i]
//         arr[j][i] = temp
//     }
//     arr[i].reverse()
// }
// console.log(arr)