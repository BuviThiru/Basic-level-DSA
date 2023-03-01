// function voteElegiblity(name, age){
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



let prime = []

function sumOfTwoPrimeNumbers(num) {

  for (let i = 2; i <= num; i++) {
    let count = 0
    for (let j = 2; j <= i - 1; j++) {
      if (i % j == 0) {
        count = count + 1
        break
      }
    }
    if (count == 0) {
      prime.push(i)
    }
  }
  console.log(prime)

  for (i = 0; i < prime.length; i++) {

    for (j = 0; j < prime.length; j++) {
      if (i == j) continue
      let sum1 = prime[i] + prime[j]
      if (sum1 == num) {
        console.log(`Sum of two prime numbers ( ${prime[i]}, ${prime[j]} ) is = ${num}`)
      }
      
    }
  }
}
sumOfTwoPrimeNumbers(20)
sumOfTwoPrimeNumbers(12)

