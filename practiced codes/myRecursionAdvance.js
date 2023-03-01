// function lexicographicNumbers(start,n,res){
//     if(start > n ) return
//       res.push(start)
//       lexicographicNumbers(start*10,n,res)
//     if(start%10 !=9){
//     lexicographicNumbers(start+1,n,res)
//     }
// }
// let res = []
// lexicographicNumbers(1,35,res)
// console.log(res)



// function subSeqArray(arr, i, result) {
//     if (i == arr.length) {
//         if (result.length > 0) {
//             console.log(result)
//         }
//     }
//     else {
//         result.push(arr[i]);
//         console.log("element being pushed",arr[i])
//         subSeqArray(arr, i + 1, result)
//         console.log("Element being popped" ,arr[i])
//         result.pop()
//         subSeqArray(arr, i + 1, result)
//     }
//     return
// }
// // let result = []
// let result = new Array()
// subSeqArray(["a", "b", "c"], 0, result)
// console.log(result)

// function tileArrangemnt(n){
//     if(n==1 || n ==0) return 1
//     else
//     return tileArrangemnt(n-1)+ tileArrangemnt(n-2)
// }
// console.log(tileArrangemnt(5))


//if we need not have 1 for zero give the base for 2 also....so stack will not overflow
// function tileArrangemnt(n){
//     if(n==1) return 1
//     if (n==2) return 2
//     return tileArrangemnt(n-1)+ tileArrangemnt(n-2)
// }
// console.log(tileArrangemnt(5))

//all possible combinations of subsequ


// friends pairing problem

// function friendsParingorIndividualtoPArty(n){
//   if (n==1) return 1
//   if (n==2) return 2

//   return friendsParingorIndividualtoPArty(n-1)+ (n-1)* friendsParingorIndividualtoPArty(n-2)

// }
// console.log(friendsParingorIndividualtoPArty(4))
// console.log(friendsParingorIndividualtoPArty(3))

// All possible subsequence og given array

// function subsequence(arr,res,i){
//   if(i==arr.length){
//     console.log(`{${res} }`)
//     return
//   }
//     subsequence(arr,res+ " "+arr[i],i+1)
//     subsequence(arr,res,i+1)
//   }
// let arr = ["a","b","c"]
// subsequence(arr,"",0 )


// function nullify(num, counter) {
//     if (num == 0) return counter
//     let num1 = String(num).split("")
//     let maxnum = Math.max(...num1)
//     return nullify(num - maxnum, counter + 1)
// }
// console.log(nullify(27, 0))


// function unify(num,counter){
//     if(num==1)return counter
//     let temp = num-1
//     if(temp%2 == 0) temp = temp/2
//     else if(temp%3 == 0) temp = temp/3
//     return unify(temp,counter+1)
// }
// console.log(unify(12,0))

function printCurrency(amount, twoThou, fiveHun, ten) {
    if (amount < 10) {
        console.log(`2000 = ${twoThou}`)
        console.log(`500 = ${fiveHun}`)
        console.log(`10 = ${ten}`)
    }
    else {
        if (amount >= 2000) {
            return printCurrency(amount - 2000, twoThou + 1, fiveHun, ten)
        }
        else if (amount < 2000 && amount >= 500) {
            return printCurrency(amount - 500, twoThou, fiveHun + 1, ten)
        }
        else {
            return printCurrency(amount - 10, twoThou, fiveHun, ten + 1)
        }
    }
}
printCurrency(5540, 0, 0, 0, 0)
printCurrency(755,0,0,0)