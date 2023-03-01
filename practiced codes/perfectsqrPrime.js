// function perfsqur(num) {
//     for (let i = 1; i <= num/2; i++) {
    
//         if (i * j == num) {
//             console.log(`Given number - ${num} is a perfect square`);
//             return;
//         }

//     }
//     console.log(`Given number - ${num} is not a perfect square`)
// }

// perfsqur(100);
// perfsqur(144);
// perfsqur(110);
// perfsqur(26);









function printPrime(num){

for (let i = 2; i <= num; i++) {
    let count = 0
    for (let j = 2; j <= i - 1; j++) {
        if (i % j == 0) {
            count = count + 1
            break
        }
    }
    if (count == 0) { console.log(i) }
}
}
printPrime(20)


// function primeORnot(num1){
//     let count1 =0
//     for(i=2; i<=num1-1; i++){
    
//         if(num1%i == 0) {
//             count1 = count1 +1  
//             break                    
//         }
//     }
//     (count1 == 0)? console.log(num1 +" - Number is prime"):console.log(num1 + " - Number is not prime")
// }
// primeORnot(136)
// primeORnot(97)
// primeORnot(17)


function isPrime(num){
    for(let i=2;i<num; i++){
        if (num%i == 0) return;
    }
    return num
}

function printPrime(n){
    for(let i=2;i<=n; i++)
    console.log(isPrime(i))

}
printPrime(100)