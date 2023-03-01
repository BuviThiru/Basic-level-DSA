// Requirements: "Problem-1:
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
