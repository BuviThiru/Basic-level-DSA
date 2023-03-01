// function printsVowConst(str){
//     let vowels = "aeiou"
//     let conso =  ""
//     for(const key of str){
//         // console.log(key)
//         if(vowels.includes(key)) console.log(key)
//         else conso = conso +( key+ "\n")
//     }
// console.log(conso)
// }
// printsVowConst("javascript")


// function vowelexchange(str1){
//     let vowellist = "aeiou"  
//     if(str1[0] == str1[str1.length-1] && vowellist.includes(str1[0])) console.log(true)  
//     else console.log(false)



// }
// vowelexchange("anitha")
// vowelexchange("kavitha")
// vowelexchange("catc")

// function secondLarge (arr){
//     arr.sort((a,b ) => b-a)
//     console.log(arr)
//     for(i=0; i<arr.length;i++)
//    if (arr[i] != arr[i+1] ) {console.log(arr[i+1]); return}

// }
// secondLarge([2,5,7,8,3,8])

// function factorial(n){
//     let nf = 1
//     while(n != 0){
//     nf = nf * n
//     n--
//     }
//     return nf

// }
// console.log(factorial(5))

//

// function getGrade(score) {
//     let grade;
//     if(score > 30) {
//         grade = "Invalid number";
//     }
//     else if (score > 25 && score <= 30) {
//          grade = "A"
//     }
//     else if (score > 20 && score <= 25) {
//          grade = "B"
//     }
//     else  if (score > 15 && score <= 20) {
//          grade = "C"
//     }
//     else  if (score > 10 && score <= 15) {
//          grade = "D"
//     }
//     else if (score > 5 && score <= 10)  {
//          grade = "E"
//     }
//     else  {
//          grade = "F"
//     }
//     return grade;
// }
// console.log(getGrade(11));



// function evenOddFunction(x, y) {
//      if (x % 2 == 0 && y % 2 == 0) { 
//           console.log(`Both numbers are even . Result is ${x + y}`) 
//      }
//      else {
//           let result = (2 * x) - (y * y)
//           console.log(`Both numbers are odd . Result is ${result}`)
//      }
// }
// evenOddFunction(2, 2)
// evenOddFunction(3, 4)
// evenOddFunction(3, 3)



// function solution(statues) {
//      let x = Math.max(...statues)
//      let y = Math.min(...statues)
//      // console.log(x,y)
//      count = 0
//      while(y<x){
//           // console.log(y)
//          if(!statues.includes(y+1)) 
         
//          {count++ }
//          y++
//      }
//      return count
//      }
// console.log(solution([3,6,7,2]) )    

// function minJumps(arr,n){
//      let i = 0;
//      let count = 0;
// while(i<=n-1){ 
//     i = i + arr[i];
//     count++ ; 
//     if(i>=n-1) return count;
// }  
//   return -1;
//  }
// console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9],11))
// console.log(minJumps([1, 4, 3, 2, 6, 7],6))
let numerator = 4
let denominator = 333
let x =  String(parseFloat (numerator/denominator))
let y = x.split(".")
let z = y[1].length
let a = y[1]
let rep = false
let i = 0, j =3 , b = ""
while(i<3 && j<4+i){
  
  if(a[i]==a[j]){
    console.log(a[i])
    b = b+ a[i]
  i++
  j++

  repeat = true
}
}
if(repeat = true) { let c = y[0]+"."  + "("+ b +")"; console.log(c);console.log(typeof(c));}

console.log(x,y,z)