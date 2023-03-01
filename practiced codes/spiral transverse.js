// let mat = [
//     [1, 2, 3, 4],
//     [5, 6, 7 ,8],
//     [9, 10, 11, 12]
// ]
// let rs = 0;
// let cs = 0;
// let rl = mat.length - 1;
// let cl = mat[0].length - 1;
// console.log("Spiral transit")
// while (rs <= rl && cs <= cl) {
//         for (let i = cs; i <= cl; i++) {
//             console.log(mat[rs][i]);
//         }
//         rs++
//         for (let i = rs; i <= rl; i++) {
//             console.log(mat[i][cl]);
//         }
//         cl--
//         for (let i = cl; i >= cs; i--) {
//             console.log(mat[rl][i]);
//         }
//         rl--
//         for (let i = rl; i >= rs; i--) {
//             console.log(mat[i][cs]);
//         }
//         cs++

//     }


    let row1 = [1,2,3,4];
let row2 = [5,6,7,8,];
let row3 = [10,11,12,13];
let row4 = [14,15,16,17];
let mat = [row1,row2,row3,row4];
function wavematrix(mat,ttlrw,ttlcol){
    let strw=0;
    let stcl=0;{
        while(strw<ttlrw && stcl<ttlcol){
            for(i=strw;i<ttlrw;i++){
                console.log(mat[i][stcl])
            }stcl++
            for(i=ttlrw-1;i>=strw;--i){
                console.log(mat[i][stcl])
            }stcl++
        }
    }
}wavematrix(mat,4,4)