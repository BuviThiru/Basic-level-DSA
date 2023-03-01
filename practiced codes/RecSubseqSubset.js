// Manish sir version

// function printSubsequenes(arr, i, result) {
//     if(i == arr.length) {
//         if(result.length > 0) console.log(result);
//     } else {
//         result.push(arr[i]);
//         printSubsequenes(arr, i+1, result);
//         result.pop();
//         printSubsequenes(arr, i+1, result);
//     }
//     return;
// }
// let arr = ["a","b","c"];
// let result = new Array();
// printSubsequenes(arr, 0, result);


// **********Anupreet mam

// function subsequence(arr,res,i){
//       if(i==arr.length){
//         console.log(`{${res} }`)
//         return
//       }
//         subsequence(arr,res+ " "+arr[i],i+1)
//         subsequence(arr,res,i+1)
//       }
//     let str = "abc"
//     let arr =str.split("")
//     subsequence(arr,"",0 )



// function subset(arr,res,i){
//     if(i==arr.length){
//       console.log(`{${res} }`)
//       return
//     }
//       subset(arr,res+ " "+arr[i],i+1)
//       subset(arr,res,i+1)
//     }
//   let arr = [1,2,3]
//   subset(arr,"",0 )

// function printbinaryseq(input, output){
//     if(input==0){
//         console.log(output);
//         return;
//     }
//     else{
//         printbinaryseq(input-1,output +  "0")
//         printbinaryseq(input-1, output +  "1")

//     }
// }
// printbinaryseq(3,"")


// function printbinaryseqwithNonconseqOne(input, output) {
//     if (input == 0) {
//         console.log(output);
//         return;
//     }
//     printbinaryseqwithNonconseqOne(input - 1, output + "0")
//     if (output[output.length - 1] != "1") {
//         printbinaryseqwithNonconseqOne(input - 1, output + "1")
//     }
// }
// printbinaryseqwithNonconseqOne(3,"")



// let counter = 0
// function printbinaryseqwithNonconseqOneCount(input, output) {
//     if (input == 0) {
//         counter++
//         return ;
//     }
//     printbinaryseqwithNonconseqOneCount(input - 1, output + "0")
//     if (output[output.length - 1] != "1") {
//         printbinaryseqwithNonconseqOneCount(input - 1, output + "1")
//     }
// }
// printbinaryseqwithNonconseqOneCount(3,"")
// console.log(counter)


function sortbyswapRecursion(arr,s,e){
    let temp = 0
    if(s>=e){ 
    return arr
    }
    else{
        temp = arr[s]
        arr[s]=arr[e]
        arr[e]= temp
        return sortbyswapRecursion(arr,s+1,e-1)
    }
}
let arr = [10,20,30,60,40,50]
console.log(sortbyswapRecursion(arr,0,arr.length-1))
