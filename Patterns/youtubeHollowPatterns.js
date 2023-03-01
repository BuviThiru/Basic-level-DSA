let n = 7
// console.log("HollowSquare")
// for(let i =1; i<=n; i++){
//     for(let j=1; j<=n;j++)
//     if(i==1 || j==1 ||j==n||i==n)
//     process.stdout.write(" * ")
//     else {
//         process.stdout.write( "   ")
//     }
//     console.log()
// }

// console.log("Parallel lines - Horizontal")
// for(let i =1; i<=n; i++){
//     for(let j=1; j<=n;j++)
//     if(i==1  ||i==n)
//     process.stdout.write(" * ")
//     else {
//         process.stdout.write( "   ")
//     }
//     console.log()
// }

// console.log("X - Pattern")
// for(let i =1; i<=n; i++){
//     for(let j=1; j<=n;j++)
//     if( i==j  || i+j == n +1)
//     process.stdout.write(" * ")
//     else {
//         process.stdout.write( "   ")
//     }
//     console.log()
// }

// console.log("+ Pattern")
// let k =(n+1)/2
// for(let i =1; i<=n; i++){
//     for(let j=1; j<=n;j++)
//     if(i==k ||j== k)
//     process.stdout.write(" * ")
//     else {
//         process.stdout.write( "   ")
//     }
//     console.log()
// }

// console.log("Swastik")
// let k =(n+1)/2
// for(let i =1; i<=n; i++){
//     for(let j=1; j<=n;j++)
//     if(i==k ||j== k|| (i==1 && j>k)||(j==n &&i>k)||(i==n && j<k)||(j==1 && i<k))

//     else {
//         process.stdout.write( "   ")
//     }
//     console.log()
// }


// console.log("Right Angle Hollow Triangle")
// for (let i = 1; i <= n; i++) {
//     for (j = 1; j <= i; j++) {
//         if (j == 1 || j == i||i==n) {
//             process.stdout.write(" * ")
//         }
//         else { process.stdout.write("   ") }
//     }
//     console.log()
// }

// console.log("Decreasing Hollow Triangle")
// for (let i = 1; i <= n; i++) {
//     for (j = i; j <= n; j++) {
//         if (j == i || j == n||i==1) {
//             process.stdout.write(" * ")
//         }
//         else { process.stdout.write("   ") }
//     }
//     console.log()
// }