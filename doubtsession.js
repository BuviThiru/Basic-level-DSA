// Input: arr[] = {2, 3, 4, 5, 6}
// Output: arr[] = {6, 8, 15, 24, 30}

// // We get the above output using following
// // arr[] = {2*3, 2*4, 3*5, 4*6, 5*6} 

// let arr = [2, 3, 4, 5, 6]
// let ans = []
// num = arr.length
// for(i=0;i<num;i++){
//     if(i==0){ ans.push(arr[i]*arr[i+1])}
//     else if(i==num-1){ans.push(arr[i]*arr[i-1])}
//     else {ans.push(arr[i-1]*arr[i+1])}
//  }
//  console.log(ans)

// how many swaps are required to bring elements less than or equal to  x
// Input:  arr[] = {2, 1, 5, 6, 3}, x = 3
// Output: 1
//arr[] = {2, 7, 9, 5, 8, 7, 4} x=5
//output-2
arr = [2, 7, 9, 5, 8, 7, 4]
arr1 = [2, 1, 5, 6, 3]

function howManySwAPS(arr, num) {
    let swap = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > num)
            break
    }
    for (j = i; j < arr.length; j++) {
        if (arr[j] <= num)
            swap = swap + 1
    }
    return swap
  }

console.log(howManySwAPS(arr, 5))
console.log(howManySwAPS(arr1, 3))
console.log(howManySwAPS([1,2,5,6,7,4,3,1,8,9,2,1,10], 6))
