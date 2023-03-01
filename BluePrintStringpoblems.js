// function uniquechatacterInString(str){
    // let lengthStr = str.length - 1
    
    // for (i = 0; i <= lengthStr; i++) {
    //     let count = 0
        
    //     for (j = 0; j <= lengthStr; j++) {
    //          (str.charAt(i) == str.charAt(j)) ? count++:{}
               
    //         }
    //         if(count == 1) console.log(str.charAt(i))   
    //     }  
    // }
    // //  uniquechatacterInString("development")
    //  uniquechatacterInString("hello")



//     function reversestring(input1) {

//         var finalinput = " ";
//      for (let i = input1.length - 1; i >= 0; i--) {
//          finalinput += input1[i];
         
//      }
//      console.log(finalinput)
//  }
//  reversestring ("Hello")

//  function isPalindromeString(word) {
//     let word1 = word
//     let output = ""
//     for (let i = word.length -1; i >= 0; i--) {
//       output  += word[i]
//     }
   
//     if (word1 == output) { console.log(`${word1} is a Palindrome`) }
//    else { console.log(`${word1} is not a Palindrome`) }
//   }
//   isPalindromeString ("madam")
//   isPalindromeString("nun")
//   isPalindromeString("hello")
    

 // / reverse number using api
// let a = 23456
// let b= ""
// let c = a+b
// console.log(typeof(c))
// console.log(c.split(""))//without space splits each character
// console.log(c.split(" "))//splits by space/words
// console.log(c.split("").reverse().join(""))



//convert the first letter to capital 

// function firstLetterCapital(str){
//     let arr1 = str.split(" ")
//     let arr2 = [];
//     for(i=0; i< arr1.length; i++){
//         console.log(arr1[i])
//         arr2.push(arr1[i].charAt(0).toUpperCase()+arr1[i].slice(1))
        
//     }
//   console.log(arr2.join(" "))
// }firstLetterCapital("have a great day")
// console.log(firstLetterCapital)

// // length of the sentence
// let str1 = "i am the happiest person"
// let str2 = str1.split(" ")
// console.log(str2)
// console.log(str2.length)

// //longest word in the sentence
// let longest ="i" 
// for(i= 1; i<str2.length; i++){
//     longest.length < str2[i].length?longest =str2[i]:{}
// }
// console.log(longest)

//reverse the string by swapping
function stringReverse(string1){ //string has to be converted into array
let string = string1.split("")
let start = 0
let end = string.length -1

while(start<=end){
    
temp = string[start]

string[start] = string[end]
string[end] = temp
start++
end--

}
console.log(string.join(""))
}
stringReverse("Hello")


function firstLetterCapital(str){
  let arr1 = str.split(" ")
  let arr2 = [];
  for(i=0; i< arr1.length; i++){
      arr2.push(arr1[i].charAt(0).toUpperCase()+arr1[i].slice(1))
  }
console.log(arr2.join(" "))
}firstLetterCapital("have a great day")


function firstLetterofNamesCapital(arrOfNames){
  result = [ ]
for(i=0;i<arrOfNames.length;i++){
  temp = (arrOfNames[i]).split(" ")
  temp2 = [ ] ; 
  for(j=0;j<temp.length;j++)
  temp2.push(temp[j].charAt(0).toUpperCase()+temp[j].slice(1))
  result.push(temp2.join(" "))

}

console.log(result)
}
firstLetterofNamesCapital(["raj kumar","siva kumar", "raghu", "selvi","kalai"])

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
//}