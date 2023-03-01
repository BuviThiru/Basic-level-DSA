// reverse number using api
let a = 23456
// let b= ""
// let c = a+b
// console.log(typeof(c))
// console.log(c.split(""))//without space splits each character
// console.log(c.split(" "))//splits by space/words
// console.log(c.split("").reverse().join(""))



//convert the first letter to capital 


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
function stringReverse(string) {
    let start = 0
    let end = string.length - 1
    while (start <= end) {
        temp = string[start]
        string[start] = string[end]
        string[end] = temp
        start++
        end--
    }
    console.log(string)
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




