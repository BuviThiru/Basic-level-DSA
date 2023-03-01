// Requirements: "Question 1: Create a JSON object for a showroom of cars, who sells cars of different brands.
// JSON shall contain various details such as: car brand name, car models, price and few basic details.
// Also write a program to print details of most expensive car
// Question 2: Write a program to sort a given data using recursive approach.
// Question 3: Create an JSON object for grades of a class having structure
// {""name"": 'John', ""grade"": 8, ""sex"": 'M'},
// Also write a program to find classroomAverage ,boysAverage ,girlsAverage,highestGrade and lowestGrade
// Question 4: Write a program using recursion to print a triangle of length n.
// Input: 5
// Output:
// * *
// * * *
// * * * *
// * * * * *"

const { Console } = require("console");

const mycars =
    [{
        "Brand": "Renault KWID",
        "Price": 596000,
        "NumOfSeats": 5,
        "Gear": "Manual"
    },
    {
        "Brand": "Urban Cruiser",
        "Price": 880000,
        "NumOfSeats": 5,
        "Gear": "Auto"
    },
    {
        "Brand": "Kia Seltos",
        "Price": 18400000,
        "NumOfSeats": 8,
        "Gear": "Auto"
    },
    {
        "Brand": "Kinger",
        "Price": "1077000",
        "NumOfSeats": 8,
        "Gear": "Auto"

    }]

// console.log(mycars)
// let max = 0
// for (const key of mycars) {
//     // console.log(key)
//     if (key.Price > max) max = key.Price
// }
// console.log(`The car with Maximum Price range is : ${max}`)
// for (const key of mycars) {
//     // console.log(key.Price)
//     if (key.Price == max) console.log(`The brand ${key.Brand} is the car with highest price ${max}`)
// }

// for (const key of mycars) {
//     if (key.Price == max) console.log(key)
// }


const classroomRandom = [
    { "Name": "Raj", "Grade":4 , "Sex": "M" },
    { "Name": "Rani", "Grade":6 , "Sex": "F" },
    { "Name": "Kumar", "Grade":8 , "Sex": "M" },
    { "Name": "Ezhil", "Grade": 9, "Sex": "M" },
    { "Name": "Anitha ", "Grade":1 , "Sex": "F" },
    { "Name": "Priya ", "Grade": 5, "Sex": "F" },
    { "Name": "Vynai ", "Grade": 3, "Sex": "M" },
    { "Name": "Sarat", "Grade": 11, "Sex": "M" },
    { "Name": "Tamil", "Grade": 12, "Sex": "F" },
    { "Name": "Kumari ", "Grade": 7, "Sex": "F" },
    { "Name": "Deepa ", "Grade": 9, "Sex": "F" }
]
// let male = 0; let female = 0;
// for(const key of classroomRandom){
//     // console.log(key.Sex)
//     key.Sex == "M" ? male = male +1 : female++ }
//     console.log(`Total Number of Boys = ${male}`)
//     console.log(`Average number of boys = ${male/classroomRandom.length}`)
//     console.log(`Total Number of Girls = ${female}`)
//     console.log(`Average number of boys = ${female/classroomRandom.length}`)
// let high = 0; low = 13
// for(const key of classroomRandom){
//     if(key.Grade>high) high =key.Grade
//     if(key.Grade<low) low = key.Grade
// }
// console.log(`Highest Grade is ${high}`)
// console.log(`Lowesr Grade is ${low}`)

let i = 1
function printStar(){
    console.log(" * ".repeat(i))

    if(i<=5){
    printStar()
    i++}
}