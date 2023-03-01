let n = [2,3,4,5,6]
// let output = []
// let p = 1
// for(i=0;i<n.length;i++){
// let p = n[i]*3
// output.push(p)}
// console.log(output)

//Product of all numbers in an array
let p1 = 1
for(i=0;i<n.length;i++){
 p1 = p1*n[i]
}
console.log(p1)

//sorting the objects based on the id
let objSort = [{
    id:23,
    name: "JS"
},
{
    id: 3,
    name:"C++"
},
{
    id:5,
    name:"Python"
}
]
const result = objSort.sort((a,b) => (a.id - b.id))
console.log(result)
