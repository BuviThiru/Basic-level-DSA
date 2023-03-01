const person = {
    fname: "Sharvin",
    lname: "Vinoth",
    age: 3.5,
    sex: "Male",
    fathername: "Vinoth Kumar",
    mothername: "Buvaneshwari",
    sibling: "Ezhil V",
    DOB: "23 - 10 - 2018",
    prof : "playschool Student",
    schooling : function(){
        return this.prof
    }
}

const person1 = {
    name: "Ezhil"
}

// // console.log (person) //prints entire object
// console.log (person.age) //{ object.key ==> gets the value for that particular key}
// console.log (person.schooling()) //return the value of the method schooling....



// //  LOOPING THROUGH AN OBJECT   

// for (const key in person)
// {
// // console.log (`${key} : ${person[key]}`)
// console.log(key,":", person[key])
// }


// //object.freeze
// Object.freeze(person) //prevents modifying
// person.age = 3.9
// console.log(person.age) //returns 3.5 as it is freezed

// console.log(Object.isFrozen(person))

// console.log(Object.isSealed(person))


// //object.seal
// Object.seal(person) //prevents adding but can be modified
// person.age = 3.9
// console.log(person.age) //returns 3.9 as it is freezed

// console.log(Object.isFrozen(person))

// console.log(Object.isSealed(person))


//Object.is - compare 2 objects and returns Boolean

// console.log(Object.is(person,person1))// returns true if properties are same..now its false

//convert array to an object

let arr = ["apple","orange","grapes","kiwi","banana"]

// method : 1 
// let obj = {...arr}
// console.log(obj)


//Method: 2
// let obj = Object.assign({},arr)
// console.log(obj)

// Method : 3
let obj = {}
for(const key of arr)
obj[arr.indexOf(key)] = arr[key]
console.log(obj)













