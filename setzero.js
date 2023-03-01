var setZeroes = function (matrix) {
    let row= false; //check if first row has zero n make as true
    let column = false; //check if 1st column has zero n make as true
    // console.log(matrix)
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] == 0) column = true
    }
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[0][j] == 0) row = true
    }
    console.log(row,column)

    for (let i = 1; i < matrix.length; i++) {//leave row zero
        for (j = 1; j < matrix[0].length; j++) { //leave column zero
            if (matrix[i][j] == 0) {
                matrix[0][j] = 0
                matrix[i][0] = 0
                break;

            }
        }
    }
   console.log("REduced Matrix", matrix)
     for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[0][j] == 0) {
                for (i= 1; i < matrix.length; i++) {
                    matrix[i][j] = 0
                }
            }
     }
     console.log("Row zero",matrix)
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][0] == 0) {
                for (let j = 1; j < matrix[0].length; j++)
                    matrix[i][j] = 0
            }
        }
               console.log(matrix)
        if (row == true) {
            for (let j = 0; j < matrix[0].length; j++) {
                matrix[0][j] = 0
            }
        }
        if (column == true) {
            for (let i = 0; i < matrix.length; i++) {
                console.log(matrix[i][0])
                matrix[i][0] = 0
            }
        }


    
    console.log(matrix)
}
let matrix =[[0,1,2,0],[3,4,5,2],[1,3,1,5]]
setZeroes(matrix)