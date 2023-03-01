// let ans = []
// function subarray(arr, index, temp) {
//     if (index >= arr.length) {
//         ans.push(temp.slice())
//         return ans
//     }
//     temp.push(arr[index])
//     subarray(arr, index + 1, temp)
//     temp.pop()
//     subarray(arr, index+1, temp)
//     return ans
// }
// console.log(subarray([1, 2, 3], 0, []))


let res = []
function subarrayStr (str,index,temp){
    if(index>=str.length){
        res.push(temp)
        return res
    }
    subarrayStr(str,index+1, temp+str[index])
    subarrayStr(str,index+1, temp)
    return res

}
console.log(subarrayStr("ABC",0,""))