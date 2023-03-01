// Requirements: "1. Bikers A and B started the journey and A having X litres of petrol and B having Y litres of petrol. K
// and L are the km per litre for A and B bikes.
// Let us consider halt as an array a1, a2, a3, .... an where n is the length of the array. a represent distance
// from one halt to another
// .

const { Console } = require("console")

// Write a program to find each biker will cross how many halts based on the petrol quantity and the litre
// per km.
// Sample Input:
// 10 12
// 20 15
// 40 98 134 179 211 248
// Sample Output:
// 2 2

// 2. Write a program to get an input (‘How are you’) and by default it should be good in the prompt text
// box.


// 3. Assume that the input will be a word with odd letter count. Print the output as given below.
// start with middle letter from first line. Next line two letter from middle . Continue still you print all
// letters in last line. Then start with the first letter and continue for the remaining letters.
// 4. Seetha is working as a professor in a college and she is having 100+ student records and she wants
// to convert student’s names into uppercase. Write a program to help Seetha to Change the student
// name into uppercase.
// Constraint
// Input should be string not an number or any other data type
// Input string should be lowercase or uppercase letters
// Input Format
// The input should be string separated by new line
// Output Format
// Sort the given set of strings and print each string one by one.
// Sample Input 1:
// divya
// seetha
// shanmugi
// mohan khan
// mohan tata
// Output:
// DIVYA
// SEETHA
// const oddLetter = letter => {
// const letterArr = letter.split(' ');
// const letterLen = letterArr.length;
// const middle = (letterLen -1) / 2;
// const newLetter = letterArr.slice(middle).concat(letterArr.slice(0,
// middle))
// const arr = [];
// letterArr.forEach(element => {
// arr.push(newLetter.join(' '));
// newLetter.pop();
// newLetter.unshift(' ');
// });
// arr.reverse();
// return arr.join('\n');
// }
// console.log(oddLetter('R E L E V E L'))

// SHANMUGI
// MOHAN KHAN
// MOHAN TATA"



// const readinput = require("readline")
// const rl = readinput.createInterface({
//     input: process.stdin,
//      output: process.stdout
// })

// rl.question("How are You?", (ans) => {
//     console.log("Good")
//     rl.close()

// })



let arr = ["divya",
    "seetha",
    "shanmugi",
    "mohan khan",
    "mohan tata"]
// let output =[]
//      output = arr.forEach(x => x.toUpperCase)
//     console.log(arr)
    for(const key of arr){
        key.toUpperCase()
        
    }
    console.log(arr)