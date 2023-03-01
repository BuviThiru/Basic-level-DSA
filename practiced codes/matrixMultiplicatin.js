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