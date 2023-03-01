// source: Simplycoding Youtube
// only value needed is n- number of rows
// allways have an outer loop 1to n for number of rows
// inside - number of iterations is = number of triangle
// If from small to big (1 to i)
// If its from big to small(i to n)


let n = 5
// for (i = 1; i<=n; i++){
//     for (j= 1; j<=n; j++) {
//     process.stdout.write (" * ")
//     }
//     console.log( )
// }
// console.log()

// for (i = 1; i<=n; i++){
//     for (j= 1; j<=i; j++) {
//     process.stdout.write (" * ")
//     }
//     console.log( )
// }


// console.log()

// for (i = 1; i<=n; i++){
//     for (j= i; j<=n; j++) {
//     process.stdout.write (" * ")
//     }
//     console.log( )
// }

// console.log()
// for (i = 1; i<=n; i++){
//     for (j= i; j<=n; j++) {
//     process.stdout.write ("   ")
//     }
//     for (j= 1; j<=i; j++) {
//         process.stdout.write (" * ")
//         }
//     console.log( )
// }

// console.log()

// for (i = 1; i <= n; i++) {
//     for (j = 1; j <= i; j++) {
//         process.stdout.write("   ")
//     }
//     for (j = i; j <= n; j++) {
//         process.stdout.write(" * ")
//     }
//     console.log()
// }
// console.log()

// for(i = 1; i <= n; i++) {
//     for (j = i; j <= n; j++) {
//         process.stdout.write("   ")
//     }
//     for (j = 1; j < i; j++) {
//         process.stdout.write(" * ")
//     }
//     for (j = 1; j <= i; j++) {
//         process.stdout.write(" * ")
//     }
//     console.log()
// }
// console.log()


// for(i = 1; i <= n; i++) {
//     for (j = 1; j <= i; j++) {
//         process.stdout.write("   ")
//     }
//     for (j = i; j < n; j++) {
//         process.stdout.write(" * ")
//     }
//     for (j = i; j <= n; j++) {
//         process.stdout.write(" * ")
//     }
//     console.log()
// }
// console.log()



// for(i = 1; i < n; i++) {
//     for (j = i; j <= n; j++) {
//         process.stdout.write("   ")
//     }
//     for (j = 1; j < i; j++) {
//         process.stdout.write(" * ")
//     }
//     for (j = 1; j <= i; j++) {
//         process.stdout.write(" * ")
//     }
//     console.log()
// }

// for(i = 1; i <= n; i++) {
//     for (j = 1; j <= i; j++) {
//         process.stdout.write("   ")
//     }
//     for (j = i; j < n; j++) {
//         process.stdout.write(" * ")
//     }
//     for (j = i; j <= n; j++) {
//         process.stdout.write(" * ")
//     }
//     console.log()
// }
// console.log()

for(i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        process.stdout.write(" * ")
    }
    for (j = i; j <= n-1; j++) {
        process.stdout.write("   ")
    }
    for (j = i; j <= n-1; j++) {
        process.stdout.write("   ")
    }
    for (j = 1; j <= i; j++) {
        process.stdout.write(" * ")
       }
    console.log()
}
// process.stdout.write(" * ".repeat(11))

for(i = 1; i <= n; i++) {
    for (j = i; j <= n-1; j++) {
        process.stdout.write(" * ")
    }
    for (j = 1; j <= i; j++) {
        process.stdout.write("   ")
    }
    for (j = 1; j <= i; j++) {
        process.stdout.write("   ")
    }
    for (j = i; j <= n-1; j++) {
        process.stdout.write(" * ")
       }
    console.log()
}

