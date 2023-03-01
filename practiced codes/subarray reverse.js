//Reverse the given array
// let num =[2,4,6,7,8]
// start = 0
// end = num.length-1
// while(start<=end){
// temp = num[start]
// num[start] = num[end]
// num[end]= temp
// start++
// end--
// }
// console.log(num)

// //rotate the given array -cyclic
// let num =[2,4,6,7,8]
// start = 0
// end = num.length-1
// while(start<=end){
// temp = num[end]
// num[end] = num[start]
// num[start] = temp
// start++

// }
// console.log(num)


function subarrayReverse(array) {
    let temp = [...array]
    temp = temp.sort()
    // console.log(array)
    // console.log(temp)
    for (start = 0; start <= array.length - 1; start++) {
        if (array[start] != temp[start]) {
            break
        }
    }
    for (end = array.length - 1; end >= 0; end--) {
        if (array[end] != temp[end]) {
            break
        }
    }
    if (start >= end) {
        return "Already Sorted" }
        do {
            start++
            if (array[start - 1] < array[start]) {
                return false;
                break
            }

        } while (start != end)

        return true
    }
    console.log(subarrayReverse([1, 2, 4, 6, 3, 5]))
    console.log(subarrayReverse([1, 2, 5, 4, 3, 6, 9]))
    console.log(subarrayReverse([1, 2, 3, 4, 5, 6, 7, 8, 9]))





