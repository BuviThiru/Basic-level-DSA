function calculateHeight(radius, perimeter, volume){
    let semiperimeter = perimeter/2
    height = volume/(radius * semiperimeter)
    return height
}
calculateHeight(3,15,270)
console.log(`Height = ${height}`)

let a = 12
let b = 32
for(i=1; i<=b; i++){
    a++
}
console.log(a)
