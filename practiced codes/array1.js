const sampleArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]


// console.log(sampleArray) //prints the entire array


// console.log(sampleArray.length) //returns 10


// console.log(sampleArray[0])//returns 10


// console.log(sampleArray[5])//returns 60

// for (let i=0; i<sampleArray.length; i++) {
//           console.log(sampleArray[i])
// } //Iterates and displays all values

// for (let i=0; i<sampleArray.length; i++) {
//     if(i%2 === 0) {continue}
//     console.log(sampleArray[i])
    
// }//skips the values in even position

// // for (let i=0; i<sampleArray.length; i++) {
// //     if(i%2 != 0) {continue}
// //     console.log(sampleArray[i])
    
// // } //prints the values in even position

// console.log("Multi dimension array")
// const sampleMultiDArray = [
//     [2,4,6],
//     [5,9,1],
//     [3,6,8]
// ]

// // console.log(sampleMultiDArray)
// // console.log (sampleMultiDArray[2])
// // console.log (sampleMultiDArray[0])
// // console.log(sampleMultiDArray[0][2])
// // console.log(sampleMultiDArray[2][0])

// // for(i=0; i<sampleMultiDArray.length; i++)
// // console.log(sampleMultiDArray[i])


// console.log ("for .....of")

// for (const x of sampleMultiDArray)
// console.log(x)

// for (const x of sampleArray)
// console.log(x)



// let num = [2,5,7,9,12,56,1,6]
//  console.log(num)
//  console.log(num.length)
//  console.log(num. indexOf(6))
//   num[100] = 110
//   console.log(num.length)
//   console.log(num)

//   let num2 =[...num]
//   console.log(num2)

//   let arr = [2,4,12,56,78,9,23,54,2,12]//prints the index of the elements
// //   console.log(arr.length)
// //   for(const key in arr){
// //       console.log(key)
// //   }
// for(const key of arr){//prints elements
    
//         console.log(key)
// }


//   let arr1 = [2,4,12,56,78,9,23,54,2,12]
//   arr1.push(10,20,30)//adds the value to the end
//   console.log(arr1)
//   console.log(arr1.push())//returns length

// arr1.unshift(10,20,30)//adds the element(s)to the start
// console.log(arr1)
// console.log(arr1.unshift())

// arr1.pop()
// console.log(arr1)//removes one element at the end--12
// console.log(arr1.pop())//returns the last number which it deletes..here its 2
// console.log(arr1)


// arr1.shift()
// console.log(arr1)//returns the array after deleting 2
// console.log(arr1.shift())//returns the removed element 4


// let arr2 = [1,2,3,4,5,6,7,8,9]
// console.log(arr2.splice(2,3))//starts at index 2 and removes 3 elements(3 is not index here) [3,4,5]
// console.log(arr2)//orginal array ia altered3

// console.log(arr2.splice(4)) //[5,6,7,8,9]]

// console.log(arr2.splice(-2))// splice after counting from the end {8,9]

// console.log(arr2.splice(-2,1)) //[8]

// console.log(arr2.splice(-5,3,10,20))//[5,6,7]
// console.log(arr2) //[1,2,3,4,10,20,8,9]..Adds the new elemnets 10,20 at position -5...number of elements removed and added need not be same

let arr3 = [1,2,3,4,5,6,7,8,9]
// console.log(arr3.slice(3))//[4,5,6,7,8,9//]
// console.log(arr3)//original array is intact


// console.log(arr3.slice(3,1))//error as index 1 cannot be indentified after 3
// console.log(arr3.slice(3,6))//[4,5,6]...6 is index here..But it will not remove the element in index 6

console.log (arr3.slice(-3))//[7,8,9]
console.log (arr3.slice(-3,1)) //will not work
console.log (arr3.slice(-3,-1))//[7,8]




