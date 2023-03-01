// let n = 5
// for(i=1; i<=n; i++){
//     for (j=1; j<=i;j++){
//         process.stdout.write( " 1 ")
//     }
//     console.log()
// }


// for(i=1; i<=n; i++){
//     for (j=i; j<=n;j++){
//         process.stdout.write( " 1 ")
//     }
//     console.log()
// }

// for(i=1, p=1; i<=n ; i++, p++){
//         for (j=1; j<=i;j++){
//             process.stdout.write( " "+ p + " ")
//         }
//         console.log()
//     }

// for(i=1, p=n; i<=n ; i++, p--){
//     for (j=1; j<=i;j++){
//         process.stdout.write( " "+ p + " ")
//     }
//     console.log()
// }

// for(i=1, p=0; i<=n ; i++, p+=2){
//     for (j=1; j<=i;j++){
//         process.stdout.write( " "+ p + " ")
//     }
//     console.log()
// }

// for(i=1, p=1; i<=n ; i++, p++){
//     for (j=1; j<=i;j++){
//         if(i%2 ==0){
//         process.stdout.write( " "+ 2 + " ")}
//         else{
//         process.stdout.write( " "+ 1 + " ")}
//     }
//     console.log()
// }

// let p =1
// for (i = 1; i <= n; i++, p ++) {
//     for (j = i; j <= n; j++) {
//         process.stdout.write("   ")
//     }
//     for (j = 1; j <= i; j++) {
//         process.stdout.write(" "+p+" ")
//     }
//     for (j = 1; j < i; j++) {
//         process.stdout.write(" "+p+" ")
//     }
//     console.log()
// }
// for (i = 2; i <= n; i++, p++) {
//     for (j = 1; j <= i; j++) {
//         process.stdout.write("   ")
//     }
//     for (j = i; j <= n; j++) {
//         process.stdout.write(" "+p+" ")
//     }
//     for (j = i; j < n; j++) {
//         process.stdout.write(" "+p+" ")
//     }
//     console.log()
// }


// for (i = 1,p= 1; i <= n; i++, p ++) {
//     for (j = i; j <= n; j++) {
//         process.stdout.write("   ")
//     }
//     for (j = 1; j <= i; j++) {
//         process.stdout.write(" "+p+" ")
//     }
//     for (j = 1; j < i; j++) {
//         process.stdout.write(" "+p+" ")
//     }
//     console.log()
// }
// for (i = 2 , p= 4; i <= n; i++, p--) {
//     for (j = 1; j <= i; j++) {
//         process.stdout.write("   ")
//     }
//     for (j = i; j <= n; j++) {
//         process.stdout.write(" "+p+" ")
//     }
//     for (j = i; j < n; j++) {
//         process.stdout.write(" "+p+" ")
//     }
//     console.log()
// }


// for(i=1; i<=n; i++){
//         for (j=1,p= 1; j<=i;j++,p++){
//             process.stdout.write( " "+p+" ")
//         }
//         console.log()
//     }

// for (i = 1; i <= n; i++) {
//     for (j = 1; j <= i; j++) {
//         process.stdout.write("   ")
//     }
//     for (j = i, p = 1; j <= n; j++, p++) {
//         process.stdout.write(" " + p + " ")
//     }
//     console.log()
// }


// for (i = 1; i <= n; i++) {
//     let p = 1
//     for (j = i; j <= n; j++) {
//         process.stdout.write("   ")
//     }
//     for (j = 1; j <= i; j++) {
//         process.stdout.write( " "+p+" ")
//         p++
//     }
//     for (j = 1; j < i; j++) {
//         process.stdout.write( " "+p+" ")
//         p++
//     }
//     console.log()
// }

// for(i=1; i<=n; i++){
//     for (j = 1,p=5; j <= i; j++,p--) {
//         process.stdout.write( " "+p+" ")
//     }
//     console.log()
// }


// for(i=1, k=n ;i<=n; i++,k--){
//     p=k
//     for (j = 1; j <= i; j++) {
//         process.stdout.write( "   ")
//     }
//     for (j = i; j <= n; j++) {
//         process.stdout.write( " "+p-- +" ")
//     }
//     console.log()
// }


// let n =  5; 
// for(i=1; i<=n; i++){
// for(j=i,k=1; j<=n; j++){
//     process.stdout.write("   ")
// }
// for(j=1;j<i;j++){
//     process.stdout.write(" "+k++ +" ")
// }
// for(j=1;j<=i;j++){
//     process.stdout.write(" "+k++ +" ")
// }
// console.log()
// }
// for(i=1+1 ;i<=n; i++){
//     for(j=1,k=1; j<=i; j++){
//         process.stdout.write("   ")
//     }
//     for(j=i;j<n;j++){
//         process.stdout.write(" "+k++ +" ")
//     }
//     for(j=i;j<=n;j++){
//         process.stdout.write(" "+k++ +" ")
//     }
//     console.log()
//     }

let n =  5; 


// for(i=1 ;i<n; i++){
//     for(j=1,k=9; j<=i; j++){
//         process.stdout.write("   ")
//     }
//     for(j=i;j<n;j++){
//         process.stdout.write(" "+k-- +" ")
//     }
//     for(j=i;j<=n;j++){
//         process.stdout.write(" "+k-- +" ")
//     }
//     console.log()
//     console.log()
//     }
//     for(i=1; i<=n; i++){
//         for(j=i,k=9; j<=n; j++){
//             process.stdout.write("   ")
//         }
//         for(j=1;j<i;j++){
//             process.stdout.write(" "+k-- +" ")
//         }
//         for(j=1;j<=i;j++){
//             process.stdout.write(" "+k-- +" ")
//         }
//         console.log()
//         console.log()
//     }

    for(i=1 ;i<n; i++){
        for(j=1,k=i; j<=i; j++){
            process.stdout.write("   ")
        }
        for(j=i;j<n;j++){
            process.stdout.write(" "+k++ +" ")
        }
        for(j=i;j<=n;j++){
            process.stdout.write(" "+k++ +" ")
        }
        console.log()
        console.log()
        }
        for(i=1; i<=n; i++){
            for(j=i,k=1; j<=n; j++){
                process.stdout.write("   ")
            }
            for(j=1;j<i;j++){
                process.stdout.write(" "+k++ +" ")
            }
            for(j=1;j<=i;j++){
                process.stdout.write(" "+k++ +" ")
            }
            console.log()
            console.log()
        }