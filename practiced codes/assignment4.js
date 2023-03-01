// Requirements: "1. Create a program where you will be given a list of names of the people along with their designation,
// based on the name you type in from the input field of the given html file, the relevant designation of
// the person will be displayed.
// Following are the designation of the people:
// Alex is a Developer
// John is an Artist
// Strek is a Singer
// Smith is an Actor

// function peopleDesignation(name) {
//     switch (true) {
//         case (name === "Alex"):
//             console.log("Alex is a Developer")
//             break
//         case (name === "John"):
//             console.log("John is an Artist")
//             break
//         case (name === "Strek"):
//             console.log("Strek is a Singer")
//             break
//         case (name === "Smith"):
//             console.log("Smith is an Actor")
//             break
//         default:
//             console.log("Input doesn't match the DataBase..Try Again!!")

//     }
// }
// peopleDesignation("Strek")
// peopleDesignation("Smith")
// peopleDesignation("Ravi")


// function minMAx(arr,n){
//     let min = Infinity
//     let max = -Infinity
//     for(let i=0;i<=n;i++){ 
//       if(arr[i]<min){
//            min = arr[i]
//       }
//       if(arr[i]>max){
//         max = arr[i]
//       }

// }
// console.log(min,max)
// }
// arr = [2,3,7,-1,-7,5,17,8,9]
// minMAx(arr,arr.length-1)

//#################custom sort
const customSort = (order, arr) => {
  const numberObj = {};
  const resArr = [];
  order.split('').map((item, index) => {
      numberObj[item] = {
          value: [],
          order: index
      };
  })
  console.log(numberObj)
  arr.map(item => {
      numberObj[item].value.push(item);
  });
  const sortedObj = Object.values(numberObj).sort((a, b) => (a.order > b.order) ? 1 : -1);
  Object.values(sortedObj).map(item => {
      resArr.push(...item.value)
  });
  return resArr.join(' ');
}

const order = '2356481790';

const arr = [1, 2, 9, 3, 1, 5, 6, 2, 8, 9, 0];
console.log(customSort(order, arr));


