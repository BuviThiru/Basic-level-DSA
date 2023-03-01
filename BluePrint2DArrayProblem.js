/*
1. Wavemodel transit
2.Spiral transit
3. Matrix multiplication
Bomb explode
rotate by 90 with space
rotate by 90 without space
search the target number
*/

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
spirallyTraverse(matrix, r, c)
    {
        let res = []
        let row = 0,rowend = r-1
        let column = 0,columnend = c-1
     while(row<=rowend && column<=columnend) {  
        
        for(let i =column;i<=columnend;i++ ){//first row
        res.push(matrix[row][i])
        }
         row++ //omits the completed row
        
         
        for(let i = row;i<=rowend;i++){ //prints last column
            res.push(matrix[i][columnend])
        }
        columnend-- //omits last column
        
        
       if(row<=rowend){  //checks if row is still <= rowend because its incremented in 1st for loop
        for(let i = columnend;i>=column;i--){ 
            res.push(matrix[rowend][i])
        }
        rowend-- //omits last row
        
       }
       if(column<=columnend){ //checks if column is still less than or = columnend
        for(let i= rowend;i>=row;i--){
            res.push(matrix[i][column])
        }
        
          column++//omits first column
       }
       
    }
    return res
    }
//################ Matrix Multiplication##################
let mat1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let mat2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let proMat = []
let n = mat1.length-1
for (let i = 0; i <= n; i++) {
    let temp = []
    for (let j = 0; j<= n; j++) {
        product = 0;
        for (let k = 0; k <= n; k++) {
            product = product + (mat1[i][k] * mat2[k][j])
            
        }
        temp.push(product)
    }
    proMat.push(temp)
}
console.log(proMat)


function bombExplode(mat) {

    let rowl = mat.length - 1
    let coll = mat[0].length - 1
    console.log(coll)

    for (let i = 0; i <= rowl; i++) {
        for (let j = 0; j <= coll; j++) {
            if (mat[i][j] === -1) {

                if (((i - 1) >= 0) && (mat[i - 1][j] !== -1))
                    mat[i - 1][j]++
                    // console.log(i+1)
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
//     cs++ss
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


/ Requirements: "Problem-1:
// Given a 1D array of size 10 , convert it into a 2D array of size 2x5
// Problem-2:
// Given a 2D array, find the sum of the diagonal and the boundary elements of it.
// In the given matrix of size 5x5 the colored cell marks the diagonal and the boundary elements
// Input:
// A=[ [1,2,3,4,1],
// [5,6,7,8,2],
// [9,10,11,12,13],
// [13,14,15,16,15],
// [11,12,15,19,15],
// ]
// Output:
// 195 ref to assgn sol ,, a picture is given "

console.log("1.1D Array to 2D Array")
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let twoDArray = []
for (let i = 0; i < num.length; i++) {
    let temp = []
    for (let j = i; j < i + 5; j++) {
        temp.push(num[j])
    }
    twoDArray.push(temp)
    i += 4
}
console.log(twoDArray)

console.log()

console.log("2. Sum of Boundary and Diagonal elements")
function diagnonalBorderSum(matrix) {
    let sum = 0
    let n = matrix.length-1
    for(let i =0; i<=n; i++){
        for(j=0;j<=n;j++){
            if(i==0 || j==0 || i== n ||j==n ||i==j || i+j == n)
            sum += matrix[i][j]
          
        }
    }
    console.log(sum)
}
diagnonalBorderSum([[1,2,3,1],[4,5,6,1],[7,8,9,1],[4,5,6,7]])
diagnonalBorderSum([[1,2,3,1,2],[4,5,6,1,3],[4,7,8,9,1],[1,4,5,6,7],[2,3,4,5,3]])
diagnonalBorderSum([[1,1,1,1,1],[2,2,2,2,2],[3,3,3,3,3],[4,4,4,4,4],[5,5,5,5,5]])
diagnonalBorderSum([ [1,2,3,4,1], [5,6,7,8,2],[9,10,11,12,13],[13,14,15,16,15],[11,12,15,19,15]])


//############target search###########3
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


//################  Z - printing ############
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


//#########################Unique elements, Row index with maximum elements############
let mat = [[1, 2, 3],
[3, 15, 1],
[12, 2, 19]]
//    console.log(mat[0])

let obj = {}
let rl = mat.length
let cl = mat[0].length
for (let i = 0; i < rl; i++) {
    for (let j = 0; j < cl; j++) {
        let temp = mat[i][j]
        // console.log( temp)
        if (obj[temp]) { obj[temp] = obj[temp] + 1 }
        else (obj[temp] = 1)
    }
}
console.log(obj)

// let ans = [] //Alternate for 28,29
// for(const key in obj){
//     if(obj[key] ==1){
//     console.log(`${key} is an unique number`)
//     ans.push(Number(key))}
// }
// console.log(ans)

// const ans = Object.keys(obj).filter(function (item) { return (obj[item] == 1) })
// console.log(ans)


// const newanswer = [0, 0, 0];
// for (let i = 0; i < mat.length; i++) {//to iterate mat 
//     for (let j = 0; j < ans.length; j++) { // to iterate over this ans
//         var temp = Number(ans[j])  //3
//         if (mat[i].indexOf(temp) >= 0) {//checks if ans[j] is present in the row
//             newanswer[i]++;//if present the number 0 is incremented...
//         }      
//     }
// }
// console.log(newanswer)
// console.log(newanswer.indexOf(Math.max(...newanswer)))//Can use below forloop instead of this

// var i=0;
// for(let j=1;j<newanswer.length;j++){
//     if (newanswer[j]>newanswer[j-1]) {
//         i=j
//     }
// }
// console.log(`The row index which has maximum number of unique elements is ${i}`)
//#####################3end####################################

