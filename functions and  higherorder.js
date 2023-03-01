// let arrRadius = [3,1,2,4]

// let area = function(arrRadius){
//     let output = Math.PI* arrRadius*arrRadius
//     return output
// }

// function diameter(r){
//     let output = 2 * r
//     return output
// }
//  let circumference = function(r){
//      return 2*Math.PI*r
//  }
// function calculate(radius,logic){
//     let output = []
//     for(let i =0; i<= radius.length-1; i++){ 
//         output .push(logic(radius[i]))
//     }
//     return output
// }
//  console.log(calculate(arrRadius,area))
//  console.log(calculate(arrRadius,diameter))
//  console.log(calculate(arrRadius,circumference))
 

//################Higher Order function################
//########## 1. MAP
// let n = [1,2,3,4,5]
// function double(x){
//     return x*2    
// }

// let output = n.map(double)

// let output = n.map (function double(x){
//     return x*2    
// })

// let output = n.map((x) => x*2)

// let output = n.map (x =>x*2)

// let output = n.map(x => x.toString(2))// Converts to string

// console.log(output)

// ################# 2. Filter

// let num = [1,2,3,4,5]
// let output1 = num.filter(x => x%2) //returns all the odd numbers[1,3,5]
// let output2 = num.filter(x => !(x%2)) //returns all the even number [2,4]
// let output3 = num.filter(x => x<=3)
// console.log(output1)
// console.log(output2)
// console.log(output3)


// ############## 3. REDUCE

// let arr = [2,3,4,5,6]
// let result = arr.reduce(function(acc,curr){ acc = acc+curr; return acc},5)
// let result1 = arr.reduce(function(max,current){if(current>max)max = current; return max})
// console.log(result)
// console.log(result1)


const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '38000' },
];

// let result = people.map(people => people.firstName +"  " + people.lastName)
// // console.log(result)


let result1 = people.reduce(function(acc,curr){
    if(acc[curr.salary]) {
        
        acc[curr.salary] = acc[curr.salary]+1
    }
    else {
        acc[curr.salary] = 1 
    }
    return acc
},{} )
console.log(result1)


//##########firstname of the person who has salary morethan 35000

// let result2 = people.filter(function(x){
//     if(x.salary>40000)
//     return x
// })
// console.log(result2)

// let result3 = people.filter(x =>x.salary>40000).map(x => x.firstName)
// console.log(result3)


