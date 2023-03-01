// Requirements: "1.Program to demonstrate Object destructuring in nested objects
// 2.Program to clone the object and change the property and then iterate the array of objects using
// inbuilt functions and to console the object property and frame a meaning full sentence."


// const student = {
//     Firstname: "Rani",
//     Lastname: "Kumar",
//     Age: 12,
//     DateofBirth: "12 / 06 / 2010",
//     Parents: {
//         Father: {
//             fName: "Nandha Kumar",
//             fAge: 36,
//             fOccupation: "Engineer"
//         },
//         Mother: {
//             mName: "Krithiga",
//             mAge: 32,
//             mOccupation: "Home Maker"
//         }
//     },
//     Siblings: {
//         Sibling1: {
//             s1Name: "Krishna Kumar",
//             s1Age: 8,
//             s1Sex: "Male",
//             s1Class: "IIIrd"
//         },
//         Sibling2: {
//             s2Name: "Selin Kumar",
//             s2Age: 2,
//             s2Sex: "Female",
//             s2Class: "Null"
//         }
//     }
// }
// const { Firstname, Lastname, Age, DateofBirth } = student;
// const { Parents: { Father: { fName, fAge, fOccupation } } } = student;
// const { Parents: { Mother: { mName, mAge, mOccupation } } } = student;
// const { Siblings: { Sibling1: { s1Age, s1Class, s1Name, s1Sex } } } = student;
// const { Siblings: { Sibling2: { s2Age, s2Class, s2Name, s2Sex } } } = student;
// console.log(Firstname)
// console.log(Age)
// console.log(DateofBirth)
// console.log(fName)
// console.log(mOccupation)
// console.log(s1Age)
// console.log(s2Name)





// let student1 = {
//     myname: "Sasmitha S",
//     myage: 20,
//     education: "B.Sc., Computer science",
//     fathersName: " Shanmugam ",
//     mothersName: "Kavitha"
// }
// student1.myname = " is Sasmitha S";
// student1.myage = "is 20 "
// student1.education = "qualification is B.Sc., Computer science"
// student1.fathersName = "is Shanmugam"
// student1.mothersName = "is Kavitha"
// console.log(student1)




const movie = [{
    name: 'Spiderman',
    genre: 'action',
    collection: '100cr',
    hit: function () {
        return `${this.name}, is hit`;
    },
    flop: function () {
        return `${this.name}, is flop`;
    },
},
{
    name: 'Batman',
    genre: 'action',
    collection: '120cr',
    hit: function () {
        return `${this.name}, is hit`;
    },
    flop: function () {
        return `${this.name}, is flop`;
    },
},]
 
const cloneMovie = Object.assign({}, movie);

for ([key, value] of Object.entries(cloneMovie)){
    console.log(`Movie ${value.hit()}`)
}