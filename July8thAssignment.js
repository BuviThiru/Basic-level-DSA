// "1. Write a program to compute the Nth prime number using the concept of Sieve Of Eratosthenes and 
// derive its worst case time and space complexity.
// 2. Write a program to multiply two 2D matrices and derive its worst case time and space complexity.

// //###################concept of Sieve Of Eratosthenes Primr number -1 ###############################


// let n = 100
// let res = []
// res[0] = false //0 not a prime number
// res[1] = false //1 not a prime number
// for (i = 2; i <= n; i++) {
//     res[i] = true // initialize all number as prime
// }


// for (i = 2; i <= n; i++) {
//     if (res[i] == true) { //if num is prime
//         for (j = 2 * i; j <= n; j += i) { // mark j*2 from next multiple as not prime - false
//             res[j] = false
//         }
//     }
// }

// for (i = 2; i <= n; i++) {
//     if (res[i] == true) { // only prime numbers will be true..So print the prime
//         console.log(i)
//     }
// }


//###################concept of Sieve Of Eratosthenes Primr number -2(Optimized Version) ###############################


// let n = 100
// let res = []
// res[0] = false //0 not a prime number
// res[1] = false //1 not a prime number
// res[2] = true //only even number that is prime is "2"
// for (i = 3; i<= n; i = i+2) { //So do all the optimization of odd
//     res[i] = true // initialize only odd as prime..as none of the even will be prime its marked as false
// }


// for (i = 3; i*i <= n; i = i+2 ) {// Go only till sqr root of n; so i^2 = n; we need not consider even..like 3*2 = 6, so 3*3 is checked by i=i+2
//     if (res[i] == true) { //if num is prime
//         for (j = 2 * i; j <= n; j += i) { // mark j*2 from next multiple as not prime - false
//             res[j] = false
//         }
//     }
// }

// for (i = 2; i <= n; i++) {
//     if (res[i] == true) { // only prime numbers will be true..So print the prime
//         console.log(i)
//     }
// }

/*
Time Complexity  = O(Sqr(N)*logN)
Space Complexity = O(N)
*/


//##################### MAtrix  Multiplication ############################

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
/*
Time Complexity = O(n^3)
Space Complexity = O(n^2) */