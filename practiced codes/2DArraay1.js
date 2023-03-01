// Requirements: "1. Write an efficient algorithm to search a value in a 2D matrix in which the rows are in sorted order
// and the first integer of each row is greater than the last integer of the previous row.
// 2. Find the row index which has maximum no. of unique elements in a matrix efficiently."

//  let mat = [
//             [1, 2, 3],
//             [4, 5, 6],
//             [7, 8, 9]
//            ];
// let target =8
// if (target<mat[1][0]){
//     for(i=0,j=0;j<mat.length;j++)
//     mat[i][j]==target?console.log(`Target element is in the position ( ${i} , ${j})`):{}
// }
// else if (target>=mat[1][0] && target<mat[2][0]){
//     for(i=1,j=0;j<mat.length;j++)
//     mat[i][j]==target?console.log(`Target element is in the position ( ${i} , ${j})`):{}
// }
// else {
//     for(i=2,j=0;j<mat.length;j++)
//     mat[i][j]==target?console.log(`Target element is in the position ( ${i} , ${j})`):{}
// }

// let arr = [
//     [1, 1, 3],
//     [4, 5, 5],
//     [7, 4, 9]
//    ];

// let obj = {};
//  for(i=0;i<arr.length;i++){
//      for(j=0;j<arr[i].length;j++){
//          if(obj[arr[i][j]])
//          obj[arr[i][j]]++
        
//          else
//             obj[arr[i][j]] = 1
//      }
//     }
//     const ans=Object.keys(obj).filter(function(item){
//             return obj[item]===1})

// console.log(ans)

// const newanswer=[0,0,0];

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<ans.length;j++){ 
//         var temp=Number(ans[j])  
//         if(arr[i].indexOf(temp)>=0){
//             newanswer[i]++;
//         }
//     }

// }
// console.log(newanswer)


// solution:
function get(n, m, v) {

    let s = new Set();


    let max_ans = Number.MAX_VALUE;
    let cnt = -1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            s.add(v[i][j]);
        }
        let size = s.size;
        if (cnt < size) {
            size = cnt;
            max_ans = Math.min(max_ans, i);
        }
        s.clear();
    }
    return max_ans;
}




let arr
    = [[1, 2, 13, 4, 5],
    [1, 2, 2, 4, 17],
    [1, 3, 11, 3, 1]];
let n = arr.length;
let m = arr[0].length;
document.write(get(n, m, arr));








//    let obj ={}

//    for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){            
//             if(obj[arr[i][j]]){
//                 obj[arr[i][j]]=obj[arr[i][j]]+1;
//             }
//             else{
//                 obj[arr[i][j]]=1;           
                
//             }
//         }
//     }
    
//     const ans=Object.keys(obj).filter(function(item){
//     return obj[item]===1;
//     })
//     console.log(ans)
//     console.log(obj))
