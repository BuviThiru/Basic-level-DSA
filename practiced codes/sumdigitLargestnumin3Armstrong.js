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




function isPalindromeString(word) {
  let word1 = word
  let output = ""
  for (let i = word.length -1; i >= 0; i--) {
    output  += word[i]
  }
 
  if (word1 == output) { console.log(`${word1} is a Palindrome`) }
 else { console.log(`${word1} is not a Palindrome`) }
}
isPalindromeString ("madam")
isPalindromeString("nun")
isPalindromeString("hello")