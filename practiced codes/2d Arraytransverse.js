let mat = [
    [1, 2, 3, 4],
    [5, 6, 7 ,8],
    [9, 10, 11, 12]
]
let rs = 0;
let cs = 0;
let rl = mat.length;
let cl = mat[0].length;
console.log("Wave Model Transit")
while (rs < rl && cs < cl) {
    for (let i = rs; i < rl; i++) {
        console.log(mat[i][cs]);
    }
    cs = cs+1;
    if(cs==cl) break
    
    for (let i = rl-1; i >= rs; i--) {
        console.log(mat[i][cs]);
    }
    cs = cs+1;
   
}

// console.log("Spiral transit")
// while (rs < rl && cs < cl) {
//         for (let i = cs; i < cl; i++) {
//             console.log(mat[rs][i]);
//         }
//         rs++
//         for (let i = rs; i < rl; i++) {
//             console.log(mat[i][cl-1]);
//         }
//         cl--
//         for (let i = cl-1; i>= cs; i--) {
//             console.log(mat[rl-1][i]);
//         }
//         rl--
//         for (let i = rl-1; i > rs+1; i--) {
//             console.log(mat[i][cs]);

//         }
//         cs++
//     }

