
let n =15

function lexicalnumbers(start, n, res) {
    if (start > n) return
 
    else {
        res.push(start) 
        lexicalnumbers(start * 10, n, res);
       
    }
    if (start % 10 != 9) {
        lexicalnumbers(start + 1, n, res)
          }
}
let res =[]
lexicalnumbers(1,150,res)
console.log(res)





// function generateParenthesis(n, open, close, s) {

//     if(open == n && close == n) {
//         console.log(s);
//         return;
//     }

//     if(open < n) {
//         generateParenthesis(n, open+1, close, s+"{");
//     }

//     if(open > close) {
//         generateParenthesis(n, open, close+1 , s+"}");
//     }
// }

// let res = new Array();

// console.log("generateParenthesis ");
// generateParenthesis(3,0,0,"");



// function printSubsequenes(arr, i, result) {
//     if(i == arr.length) {
//         if(result.length > 0) console.log("RESULT  ===>",result);
//     } else {
//         console.log("Before pushing===>  " +result)
//         result.push(arr[i]);
//         console.log("The number is pushed now===> " +result)
//         printSubsequenes(arr, i+1, result);
//         console.log("Before pop===> " +result)
//         result.pop();
//         console.log("after pop===> "+result)
//         printSubsequenes(arr, i+1, result);
//     }
//     return;
// }
// let arr = ["a","b","c"];
// let result = new Array();
// printSubsequenes(arr, 0, result);

// function subset(arr, res, i) {
//     if(i == arr.length) {
//         console.log(res);
//         return;
//     }
//     subset(arr, res + " " + arr[i], i+1);
//     subset(arr, res, i+1);
// }
// subset([1,2,3], "", 0);


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

//######################3 PERMUTATION OF A STRING #################

// function permutationOfString(input, output) {
//     if (input == "") {
//         console.log(output);
//          return
//     }
//     for (let i = 0; i < input.length; i++) {
//         let currentelement = input[i]
//         let restOfInput = input.substring(0, i) + input.substring(i + 1);
//         permutationOfString(restOfInput, output + currentelement)
//     }
// }
// input = "ABC"
// permutationOfString(input, "")

//########################## permutation of an  array#####################333
// function swap(arr,x,y){
//     let temp = arr[x]
//     arr[x]=arr[y]
//     arr[y]= temp
// }

// function permutationOfArray(arr, position,n){
//     if(position == n)  {console.log(arr); return}
    
//         for(let i=position;i<n;i++){
//             console.log(i, position)
//             swap(arr,position,i)
//             // console.log("After Swap ==>",arr)
//             permutationOfArray(arr,position+1,n)
//             swap(arr,position,i)
//         }
//     }
// let arr = [1,2,3]
// permutationOfArray(arr,0,arr.length)