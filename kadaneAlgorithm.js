//help to find the subarray with maximum sum
//Kadane Algorithm

let arr = [1, 4, -2, -4, 6, 2, 17, -7, -7, -3, -1, 5, -8, 8, 3, -3, -2, -6]
function maximumSumSubarray(arr) {
    let n = arr.length
   
    let start = 0, end = 0, s = 0
    let maxsum = arr[0]
    let subarraySum = 0
    for (let i = 0; i < n; i++) {
        
        subarraySum += arr[i]
        if (subarraySum > maxsum) {
            maxsum = subarraySum
            start = s; 
            end = i
        }
        if (subarraySum < 0) { //when value goes below zero restart the subarray
            subarraySum = 0
            s = i+1      //as value is negative possiblity for subarray is next element, 
                         //s value changes till the end even after finding subarray..so start is used
        }
    }
    return [maxsum, start, end]
}
console.log(maximumSumSubarray(arr))