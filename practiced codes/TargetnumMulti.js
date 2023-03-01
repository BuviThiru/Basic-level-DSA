// function targetSearch(num) {
//     let target = [[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 6, 12]];
//         let rl = target.length - 1
//         let cl = target[0].length -1
       
//     for (let i = 0; i <= rl ; i++) {
//         for (let j = 0; j <= cl; j++) {
//             if (num == (target[i][j])) {
//                 console.log("The given target num = " + num + " exists at (" +i + "," +j +") position")
                
//             }
//         }
//     }
// }
// targetSearch(6)




function multiplication(mat1, mat2){
// if ((mat1.length !== mat2.length) && (mat1.length[0] !== mat2.length[0])) {
//     console.log ("Number of row and column doesn't match") 
// }
// else {
    for (i=0; i<=mat1.length-1; i++){
        let j = 0
        let c1 =0
        let c2 =0
        c1 = (mat1[i][j]*mat2[i][j])  + (mat1[i][j+1]*mat2[i+1][j])
        c2 = (mat1[i][j]*mat2[i][j+1]) + (mat1[i][j+1]*mat2[i+1][j+1])
        console.log(c1,c2)
    }
}


function minesweeper(mat)  {
    let rowl = mat.length - 1
    let coll = mat[0].length - 1
    for (let i = 0; i <= rowl; i++) {
        for (let j = 0; i <= coll; j++) {
            if (mat[i][j]===-1) {
                console.log(mat[i][j])
                if (((i-1) >= 0) && (mat[i- 1][j] !==-1))
                    (mat[i-1][j])++
                if (((i+1) <= rowl) && (mat[i+1][j] !==-1))
                    (mat[i+1][j])++
                if (((j-1) >= 0) && (mat[i][j-1] !==-1))
                    (mat[i][j-1])++
                if (((j+1) <= coll) && mat[i][j+1] !== -1)
                    (mat[i][j + 1])++
            }
            mat[i][j] = 0
        }
    }
    console.log(mat)   
}
minesweeper([[0, 0, 0], [0, -1, 0], [0, 0, 0]])


multiplication([[1,2],[3,4]], [[5,6],[7,8]])
