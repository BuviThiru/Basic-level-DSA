// Requirements: "1. Write a JavaScript program to compute the exponent of a number. Note : The exponent of a number
// 1. says how many times the base number is used as a factor. 8 x 8 = 64. Here 8 is the base and 2 is the exponent.



// function exponent(ans,base,exp){
//     if(ans==0)return exp-1
//     return exponent(parseInt(ans/base),base,exp+1)
// }
// console.log(exponent(64,8,0))
// console.log(exponent(32,2,0))


// 2. Write a JavaScript program for binary search.  Sample array: [0,1,2,3,4,5,6]  console.log(l.br_search(5)) will return '5

function br_search(arr, target, s, e) {
    if (s >e) { console.log("-1") ;return }
    else {
        let midOfArray = Math.floor((arrayLength) / 2)

        if (target == arr[midOfArray]) { console.log(midOfArray); return }
        else if (target <= arr[midOfArray]) {
            br_search(arr, target, s + 1, midOfArray);
            if (target == arr[s]) { console.log(s) ; return}
            else {
                br_search(arr, target, s, e - 1)
                  if (target == arr[e]) { console.log(e);return }
            }
        }
    }
}

let arr = [0, 1, 2, 3, 4, 5, 6]
let arrayLength = arr.length

// br_search(arr,4,0,arrayLength)
br_search(arr, 3, 0, arrayLength)


// console.log(br_search(arr, 1, 0, arrayLength))

















