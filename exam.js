// var mergeAlternately = function(word1, word2) {
//    let m = word1.length
//    let n = word2.length
//    console.log(m,n)
//    let i=0,j=0
//    let res = ""
//    while(i<m || j<n){
//     res = res+ word1.charAt(i); i++
//     res = res + word2.charAt(j);j++
//    }
//    console.log(res,i,j)
// };
// mergeAlternately("abcd","pq")


// Problem Statement You have to implement a program to find the eligibility of admission for Engineering based on following criteria Marks
//  Scored in 
//  Maths should be greater than or equal to 65 (>=65) 
//  In Physics, marks should be atleast equal to or greater than 55 (>=55) And for 
//   it should be greater than or equal to 50 (>=50) and 
//   either one of the below 2 conditions should be true: 
//   Sum of the marks scored in all three subjects should be >= 195 or 
//   Sum of marks scored in Math + Physics >= 140 
//   Constraint • 0 <= Score <= 100 for each subject Input Format • Space separated 3 integers denoting 
//   Math, Physics and Chemistry score Eg. 65 71 52 -> Math 65, Physics 71, Chemistry 52 Output Format • Print “Eligible” 
//   if eligibility criteria is fulfilled else print “Not eligible” 
//   Sample Input 1 65 71 52 Sample Output 1 Not eligible Explanation of Sample 1 Total Score -> 65 + 71 + 52 = 188 < 195 
//   and Maths and physics score sum -> 65 + 71 = 136 < 140. Since criteria is not fulfilled, Not eligible Sample Input 
//   2 70 75 52 Sample Output 2 Eligible Explanation of Sample 2 Individual subject score criteria is fulfilled as well as 
//   total Score -> 70 + 75 + 52 = 197 > 195 hence Eligible Sample Input 3 55 80 90 Sample Output 3 Not eligible Explanation of Sample 3 Since Maths Score is < 65 Sample Input 4 70 71 52 Sample
//  Output 4 Eligible Explanation of Sample 4 Total Score -> 70 + 71 + 50 = 191 < 195 and Maths and physics score sum -> 70 + 71 = 141 > 140. 
// Though total score is > 190 but individual subject score criteria is fulfilled as well as Math and physics score sum > 140 hence Eligible


function admissionEligibility(arr)
{
    if(arr[0] >= 65 && arr[1] >=55 && arr[2]>=50){
        console.log(arr[0],arr[1],arr[2])
        if(arr[0]+arr[1]+arr[2]>=195 || arr[0]+arr[1]>=140){
            return "Eligible"
        }
    }

return "Not eligible"
   
}
let arr = [65, 71, 52]
console.log(admissionEligibility(arr))