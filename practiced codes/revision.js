var data = { a: 1, b: 2, c: 3 }
var data1 = { c: 9, b: 1, c: 10 }
// console.log(data1)
let ans = {}

for (const key in data) {
    if (data1[key] === data[key]) { //
        ans[key] = data[key]
    }
}
console.log(ans)



// missing+repeated
// do not use sorting algo 
var num = [5, 1, 2, 3, 1]

var obj = {}

for (let i = 1; i <= 5; i++) {
    obj[i] = 0
}
console.log(obj)

num.forEach(function (item) {
    obj[item] += 1
})
console.log(obj)

for (const key in obj) {
        if (obj[key] === 0 ) {
        console.log (`Missing number in the array is ${key}`)}
        else if(obj[key]>1){
        console.log (`Repeated number in the array is ${key}`)
    }
}

