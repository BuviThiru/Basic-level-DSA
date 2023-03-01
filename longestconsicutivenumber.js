


// const foo = [1, 2, 3];
// const [n] = foo;
// console.log(n);


// let mat = [[1, 2, 3,4],
//            [4, 5, 6,7], 
//            [7, 8, 9,6], 
//            [7,6,9,8]]
// let n = 4

// for (i = 0; i < n; i++) {
//     for (j = 0; j < n; j++) {
//         if (i == n - 1||i == 0 || i + j == n - 1 )
//         console.log (mat[i][j])
//     }
// }


let x = [2,5,6,8,9,3,12,4,56,29]
x.sort((a,b ) => a-b)
console.log(x)

let count = 0
for(let i =0; i<x.length;i++){
if (x[i] ==x[i+1]){
   count++
 }
 else{
     count = 1
 }
                                                                                                                                                
console.log(count)}