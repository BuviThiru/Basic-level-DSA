
// Calculate the time complexity of Euclid’s Algorithm by subtraction
// Euclid’s Algorithm is a method for calculating the greatest common divisor of two integers.

// Problem 2:
// Calculate the factorial of a given number recursively and find its time and space analysis"

//################## Euclid's Algorithm GCD#######################


// function EuclidsAlgoGCD(num1,num2){
//     if(num1 == 0){ return num2}
//     if(num2 ==0) {return num1}
//     let x = parseInt(num1%num2)
//     return EuclidsAlgoGCD(num2, x)
// }
// console.log(EuclidsAlgoGCD(270,192))


//########################## Subtraction Euclid's Algo GCD####################

// function subtractEuclidsAlgoGCD(num1,num2){
//     if(num1 == num2) return num1
//         if(num1>num2){
//         return subtractEuclidsAlgoGCD(num1-num2,num2)
//     }
//     else return subtractEuclidsAlgoGCD(num2-num1,num1)
// }
// console.log(subtractEuclidsAlgoGCD(270,192))

function subtractEuclidsAlgoGCD(num1, num2) {
    if (num1 == num2) return num1
    if (num1 > num2) {
        return subtractEuclidsAlgoGCD(num1 - num2, num2)
    }
    else return subtractEuclidsAlgoGCD(num2 - num1, num1)
}
console.log(subtractEuclidsAlgoGCD(270, 192))

function subtractEuclidsAlgoGCD(num1, num2) {
    if (num1 == num2) return num1
    if (num1 > num2) {
        num1 = num1 - num2; num2 = num2
    }
    else { num1 = num2 - num1; num2 = num1 }
    return subtractEuclidsAlgoGCD(num1, num2)

}
console.log(subtractEuclidsAlgoGCD(270, 192))


//###########################3 FACtorial of the given Number #############################
// function factorialByRecursion(n){
//     if(n==1 || n ==0) return 1
//     return n * factorialByRecursion(n-1)
// }
// console.log(factorialByRecursion(5))


/*
T(0) = 1
T(n) =  T(n-1)+3(basecase check, *,-)
    =   T(n-2)+6
    =   T(n-3)+9


    = T(n-k)+3k 
n-k= 0; n = k
T(n) = T(0)+3n
      = 1+3n
 T(n) = O(n)  
       = Omega(1)
 
       
 Space Complexity = O(n)      

*/