// function findMinOp(arr, n) {
//     arr.sort((a, b) => a - b)
//     /*
//     after sort
//      arr=[1,1,1,1,3,3,7,10,10]
//     */
//     let result = 0;
//     console.log(arr)
//     for (let i = 1; i < n; i++) {
//         let prv = arr[i - 1]
//         let cur = arr[i];
//         if (prv >= cur) {
           
//             /*
//             in this condition we check our privious element is equal or greater then
//             example in first ittration prv=1 and cur=1 so condition true
//             */
//             result += prv - cur + 1
//             console.log(prv,cur,result)
//             /*
//             here we simply count no of operation
//             for example in first ittration our array alradey sorted so,
//              if we increment current element so how much operation we need to increment our current element
//              for finding the no. of operation for current element is
//              previous -current +1
//              (previous -curent) gives the value of no. of operation for reacing currnet element to (similar or equal) to it
//              for elxample prv=5 and current =3
//             how much no of operation needs to make equal prv and cur
//             no of operation = 5-3=2   here 2 no. of operation need for current element to make equal it self to priveous
//             but our task is hear to make unique so simply +1
//              no. of operatio = prv-cur+1
//             */
//             arr[i] = prv + 1
//            /* here we update the current element
//            */
//         }
//     }
//     return result;
// }
// let arr = [1, 3, 1, 10, 3, 7, 1, 10, 1]
// console.log(findMinOp(arr, arr.length))
// console.log(arr)

// let x = 0;
// for(x;x<10;x++)
// console.log(x)

var x = 10;
y = --x+1
console.log(y)

