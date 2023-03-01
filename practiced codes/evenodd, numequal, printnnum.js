// console.log("check if values are equal or not");
// var x = 10;
// if (x == 6) {
//   console.log("Values are equal");
// }
// else {
//   console.log("values are not equal");
// }


// console.log("Odd or Even")
// var a= 2453
// if(a%2==0) {
//   console.log("A is even");
// }
// else {
//   console.log("A is odd")
// }

// console.log("odd or even with function")
// function evenodd(num){
//   if (num%2==0){
//   console.log (+num + " is even number")
// }
// else {
//   console.log (+num +" is odd number")
// }
// }
// evenodd(2345)
// evenodd(7988)


// let x =3;
// let y= 5;
// let sum =x+y;
// console.log(`${x} + ${y} = ${sum}`);

// console.log("print first 10 natural numbers")
// for (i=1; i<=10; i++){
//   console.log (i)
// }


// console.log("Print n whole numbers")
// function printnum(n){
//   for(i=0; i<n; i++)
//   console.log(i)
// }
// printnum(5)


function solveProb (inputArray, n) {
  inputArray.sort();
  console.log(inputArray, n);
  let p = 0; 
  let q = n-1;
  let result = [];
  //[1,2,2,3,5]
  for(let i=0; i<inputArray.length ; i++) {
      if((i+1)%2 == 0)
      {
          result[i] = inputArray[q--];
      } else {
          result[i] = inputArray[p++];
      }
  
  }
  return result;
  
  }
  
  let finalResult = solveProb([1,3,2,2,5], 5);
  
  console.log(finalResult);