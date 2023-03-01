

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

const ans = Object.keys(obj).filter(function (item) { return (obj[item] == 1) })
console.log(ans)


const newanswer = [0, 0, 0];
for (let i = 0; i < mat.length; i++) {//to iterate mat 
    for (let j = 0; j < ans.length; j++) { // to iterate over this ans
        var temp = Number(ans[j])  //3
        if (mat[i].indexOf(temp) >= 0) {//checks if ans[j] is present in the row
            newanswer[i]++;//if present the number 0 is incremented...
        }      
    }
}
console.log(newanswer)
console.log(newanswer.indexOf(Math.max(...newanswer)))//Can use below forloop instead of this

var i=0;
for(let j=1;j<newanswer.length;j++){
    if (newanswer[j]>newanswer[j-1]) {
        i=j
    }
}
console.log(`The row index which has maximum number of unique elements is ${i}`)
