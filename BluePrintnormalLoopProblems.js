/*
two numbers with opposite sign?
two number a,b...find a^b
palytime or not in kindergarden
type of number by switch
ternary operator: pass or file
HCF
factors
perfect square
prime till n
prime or not
largest of 3
palindrome
quadratic equation
palindrome
armstrong number
*/






// function AreNumwithOppositeSign (a,b){
//     if(a<0&&b>0 || b<0&&a>0){
//         console.log(true)
//     }
// else console.log(false)
// }
// AreNumwithOppositeSign(-134,24)
// AreNumwithOppositeSign(45,-98)
// // AreNumwithOppositeSign(-122,-34)
// // AreNumwithOppositeSign(23,67)


// // function ApowerB (a,b){
// //     let s =1
// //     let ans = 1
// //    do{
// //     ans =ans * a 
// //     s++
// //   } while(s<=b)
// //     console.log(ans)

// // }
// //   ApowerB(2,3)  
// //   ApowerB(2,5)


// function playtime(temp, rain) {
//     if ((temp > 20 && temp < 25) && (rain == "False"))
//         console.log("Time to Play Outdoor!!!!")
//     else if (temp >= 18 && temp <= 20)
//         console.log("Stay in playschool")
//     else if ((temp < 18) || (temp >= 25))
//         console.log("stay home")
// }
// playtime(18, "True")
// playtime(19, "False")
// playtime(24, "False")
// playtime(24, "True")
// playtime(17, "True")
// playtime(17, "False")


// function typeofnum(num) {
//     switch (true) {
//         case (num === 0):
//             console.log("The number is zero");
//             break
//         case (num > 0):
//             console.log("The given number is Positive");
//             break
//         case (num < 0):
//             console.log("The number is negative");
//             break
//         default:
//             console.log("Incorrect number/Not a number");

//     }
// }
// typeofnum(45)
// typeofnum(-987)
// typeofnum(0)
// typeofnum("aaa")

// function passornot(mark) {
//     (mark >= 40) ? console.log("Pass Mark!!!!") : console.log("Better Luck next Time")
// }
// passornot(46)
// passornot(12)

// // console.log("HCF of the two numbers")
// // function hcfOfIntegers(num1, num2) {
// //     snum = (num1 < num2) ? num1 : num2
// //     for (i = 1; i <= snum; i++) {
// //         if (num1 % i === 0 && num2 % i === 0) { var hcf = i }
// //     }
// //     console.log(hcf)

// // }
// // hcfOfIntegers(15, 30)

// // console.log("Finding the factors of the given number")
// // function factorsOfNumber(numf) {
// //     console.log(`Factors of the given number - ${numf} are`)
// //     for (j = 1; j <= numf; j++) {
// //          if (numf % j === 0) 
// //           console.log(j) 
// //         }
// // }
// // factorsOfNumber(15)

function perfsqur(num) {
    for (let i = 1; i <= num; i++) {//ideally num/2 or upto sq root of num can beused
        if (i * i == num) {
            console.log(`Given number - ${num} is a perfect square`);
            return;
        }

    }
    console.log(`Given number - ${num} is not a perfect square`)
}

perfsqur(100);
perfsqur(144);
perfsqur(110);
perfsqur(25);



// function printPrime(num){

//     for (let i = 2; i <= num; i++) {
//         let count = 0
//         for (let j = 2; j <= i - 1; j++) {
//             if (i % j == 0) {
//                 count = count + 1
//                 break
//             }
//         }
//         if (count == 0) { console.log(i) }
//     }
//     }
//     printPrime(20)


//     // function primeORnot(num1){
//     //     let count1 =0
//     //     for(i=2; i<=num1-1; i++){

//     //         if(num1%i == 0) {
//     //             count1 = count1 +1  
//     //             break                    
//     //         }
//     //     }
//     //     (count1 == 0)? console.log(num1 +" - Number is prime"):console.log(num1 + " - Number is not prime")
//     // }
//     // primeORnot(136)
//     // primeORnot(97)
//     // primeORnot(17)


//     function isPrime(num){
//         for(let i=2;i<num; i++){
//             if (num%i == 0) return;
//         }
//         return num
//     }

//     function printPrime(n){
//         for(let i=2;i<=n; i++)
//         console.log(isPrime(i))

//     }
//     printPrime(100)




//     function voteElegiblity(name, age){
//  if(age>=18)
//  console.log(`${name}` +" of age " +age +" is eligible for voting")
// else
// console.log(`${name}`+" of age " +age +" is not eligible for voting")
// }
// voteElegiblity("Ram", 23)
// voteElegiblity("Kani", 12)


// function eligiblityBasedonAttendance(attended, Totaldays) {
//  if ((attended*100)/Totaldays >= 75)
//  console.log("You are eligible for attending your Exams!!!ALL THE BEST")
//  else console.log("You are not eligible for attending your Exams!!! SORRY")

// }
// eligiblityBasedonAttendance(12,50)
// eligiblityBasedonAttendance(47,50)


// function checkOrder (num1,num2,num3){
//     if(num1>num2 && num2>num3) //(num1>num2 && num2 > num3)
//     {console.log("Number is sorted in desending order")}
//     else if (num1<num2 && num2<num3)
//     {console.log("Number is sorted in asending order")}
//     else console.log ("Number is not arranged in any order")

// }
// checkOrder(2,3,4)
// checkOrder(4,2,1)
// checkOrder(2,5,1)
// checkOrder(1,5,2)


// function largestInThree(a,b,c){
//     if (a>b && a>c) console.log (`${a} is the greater number in (${a},${b},${c})`)
//     else if (b>a && b>c)  console.log (`${b} is the greater number in (${a},${b},${c})`)
//     else  console.log (`${c} is the greater number in (${a},${b},${c})`)
// }
// largestInThree(3,5,16)
// largestInThree(100,54,12)
// largestInThree(2,13,7)

// function palindrome(num) {
//     for (i = 10; i <= num; i++){
//     let a = (parseInt(i / 10))
//     let b = (parseInt(i % 10))
//     let c = b * 10 + a
//     if (c == i) console.log(c)
// }
// }
// palindrome(100)

// function gradeforMarks (name, mark){
//     if(mark>=90) {console.log(`${name} has scored A Grade..Excellent`)}
//     else if (mark>80 && mark<89)  {console.log(`${name} has scored B Grade..Very Good`)}
//     else if (mark>60 && mark<79)  {console.log(`${name} has scored C Grade..Good`)}
//     else if (mark>33 && mark<59)  {console.log(`${name} has scored D Grade .Need Improvement`)}
//     else  {console.log(`${name} has scored F grade..Try Hard`)}
// }
// gradeforMarks("Ram", 12)
// gradeforMarks("Ravi", 93)
// gradeforMarks("Sowmya", 75)
// gradeforMarks("Rani", 65)

// function AttendancePercent(attended, total) {
//   let resultpercentage = parseInt((attended * 100) / total)
//   if (resultpercentage >= 75)
//     console.log("You are eligible for exam")
//   else {
//     let a = parseInt((75 * total) / 100)
//     let b = a - attended
//     console.log(`You have to attend ${b} more lectures to meet 75% of attendence`)
//   }

// }
// AttendancePercent(6, 7)
// AttendancePercent(2, 7)



// We will follow below scenario -
// If (b*b - 4*a*c) = 0 then root = -b/2*a
// Else If (b*b - 4*a*c) > 0 then root =
// Else “no roots found

// function quadraticEquation(a, b, c) {
//     let x = (b * b) - (4 * a * c)
//     if (x == 0) {
//         let r = -b / (2 * a)
//         console.log(`root = ${r}`)
//     }
//     else if (x > 0) {
//         let r1 = (-b + Math.sqrt(x)) / (2 * a)
//         let r2 = (-b - Math.sqrt(x)) / (2 * a)
//         console.log(`root are = ${r1}, ${r2}`)
//     }
//     else console.log("No roots found")
// }
// quadraticEquation(1, 5, 1)


// function largestnum(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3)
//         console.log(`Greatest num is ${num1}`)
//     else if (num2 > num1 && num2 > num3)
//         console.log(`Greatest num is ${num2}`)
//     else
//         console.log(`Greatest num is ${num3}`)
// }
// largestnum(56, 78, 94)
// largestnum(234, 34, 78)
// largestnum(23, 678, 94)

// var sum = 0
// var lastdigit =0
// function sumofdigits(num4) {
//     while (num4 != 0) {
//         lastdigit = num4 % 10;
//         sum = sum + lastdigit
//         num4 = parseInt(num4 / 10);
//     }

//     console.log(sum)
// }
// sumofdigits(1234)


// function armStrongNumber(armnum) {
//   var armnum1 = armnum
//   var product = 0
//   while (armnum1 != 0) {
//     //var armnum1 = armnum;
//     lastdigit = armnum1 % 10;
//     product = product + (lastdigit * lastdigit* lastdigit);
//     armnum1 = parseInt(armnum1 / 10);


//   }

//   if (armnum == product) { 
//     console.log("Given number is an Armstrong Number") }
//   else { 
//     console.log("Given number is not an Armstrong Number") }
// }
// armStrongNumber(1234)
// armStrongNumber(153)


// function isNumPalindrome(num) {
//   let revesenum = 0
//   let num1 = num
//   while (num > 0) {
//     revesenum = revesenum * 10 + (num % 10)
//     num = parseInt(num / 10)
//   }
//   if (revesenum == num1) { console.log(`${num1} is a Palindrome Number`) }
//   else { console.log(`${num1} is not Palindrome Number`) }


// }
// isNumPalindrome(121)
// isNumPalindrome(567)


// function smallestWithoutComparisionOperator(a, b, c) {
//     let count = 0
//     while (a && b && c) {
//         a--
//         b--
//         c--
//         count++
//     }
//     return count
// }

// let small = smallestWithoutComparisionOperator(12, 7, 5,)
// console.log(small)

// function smallestWithoutComparisionOperator1(a, b, c) {
//     if (parseInt(a / b) <= 0 && parseInt(a / c) <= 0) { console.log('a is the smallest') }
//     else if (parseInt(b / a) <= 0 && parseInt(b / c) <= 0) { console.log("b is the smallest") }
//     else { console.log('c is the smallest') }
// }
// smallestWithoutComparisionOperator1(12, 7, 5,)
// smallestWithoutComparisionOperator1(2, 56, 7)
// smallestWithoutComparisionOperator1(14, 6, 8)



// const user1 = "Aman"
// const user1Pass = 1234;
// const user2 = "Nitish"
// const user2Pass = 4567;
// const user3 = "tita"
// const user3Pass = 8910;
// const user4 = "divya"
// const user4Pass = 1111;


// function userpw(userid, password) {
//     if (userid === user1 || userid === user2 || userid === user3 || userid === user4) {
//         console.log("USER ID Verified");
//         const a = userid
//         switch (a) {
//             case "Aman":
//                 password === 1234 ? console.log("Login Sucessful") : console.log("Incorrect password")
//                 break
//             case "Nitish":
//                 password === 4567 ? console.log("Login Sucessful") : console.log("Incorrect password")
//                 break
//             case "tita":
//                 password === 8910 ? console.log("Login Sucessful") : console.log("Incorrect password")
//                 break
//             case "divya":
//                 password === 1111 ? console.log("Login Sucessful") : console.log("Incorrect password")
//                 break
//             default:
//                 console.log ('Password Incorrect')
//         }
//     }
//     else {
//         console.log("USER ID Does not exist");
        

//     }
// }
// userpw("diya", 1111)

// // 1.n,m are the size of the unsorted arrays..Make single sorted array
// // 2.Write code for finding the smallest element in an array."

// let a =[3,6,8,9,13]
// let b = [4,5,7,10,11]
// let result = []
//  let m =a.length
//  let n = b.length
//  let i=0; j=0;
//  while(i<m && j<n){
    
//      if(a[i]<b[j]) {
//       result.push(a[i]) 
//       i++ 
//      }
//      else{
//          result.push(b[j])
//          j++
//      }
//  }
//  console.log(result)


//  //reversing a digit using while
// // let num =[ ]
// // let lastdigit = 0
// // while(a>0 ){
// //     lastdigit = parseInt(a % 10)
// //     reversedigit = lastdigit*10+lastdigit
// //     a = parseInt(a/10)
// // }
// // console.log(reversedigit)


// let num = [10,2,45,-3,-17,4,9];
// let min = 1;
// for (i=0; i<num.length;i++){
//     min> num[i]? min=num[i] :{}
// }
// console.log(`Smallest element in the array is ${min}`)




// let prime = []

// function sumOfTwoPrimeNumbers(num) {

//   for (let i = 2; i <= num; i++) {
//     let count = 0
//     for (let j = 2; j <= i - 1; j++) {
//       if (i % j == 0) {
//         count = count + 1
//         break
//       }
//     }
//     if (count == 0) {
//       prime.push(i)
//     }
//   }
//   console.log(prime)

//   for (i = 0; i < prime.length; i++) {

//     for (j = 0; j < prime.length; j++) {
//       if (i == j) continue
//       let sum1 = prime[i] + prime[j]
//       if (sum1 == num) {
//         console.log(`Sum of two prime numbers ( ${prime[i]}, ${prime[j]} ) is = ${num}`)
//       }
      
//     }
//   }
// }
// sumOfTwoPrimeNumbers(20)
// sumOfTwoPrimeNumbers(12)

// //Adding two numbers without using + operator
// let a = 12
// let b = 32
// for(i=1; i<=b; i++){
//     a++
// }
// console.log(a)
