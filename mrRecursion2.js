// function removecharInString(str, target, ans, s, e) {

//     if (s > e) return ans
//     else {
//         if (String(str.charAt(s)) !== target) {
//             console.log(String(str.charAt(s)))
//             return removecharInString(str, target, ans + str.charAt(s), s + 1, e)
//         }
//         else  return removecharInString(str, target, ans, s + 1, e)
//     }
// }
// str = "placement"

// console.log(removecharInString(str, "a", "", 0, str.length - 1))

//number of All possible path in maze

// function maze (arr, r,c,i,j ){ 
// if(i==r || j==c) return 0
// if(i==r-1 && j==c-1) return 1

// return maze(arr, r,c,i+1,j ) + maze(arr, r,c,i,j+1) 
    
// }
// let arr = [[0,0,0],[0,0,0],[0,0,0]]
// console.log(maze(arr,3,3,0,0))

// All possible path in maze

function maze (arr, r,c,i,j ,path ){ 
    if(i>=r || j>=c) return 0
    if(i==r-1 && j==c-1) {console.log(path) ; return 1}
    
    return maze(arr, r,c,i+1,j,path +" D" ) + maze(arr, r,c,i,j+1, path + " R") 
        
    }
    let arr = [[0,0,0],[0,0,0],[0,0,0]]
    console.log(maze(arr,3,3,0,0,""))

//All possible paths if we have blocks in it

// function maze (arr, r,c,i,j ,path ){ 
//     if(i==r || j==c || arr[i][j]==1) return 0
//     if(i==r-1 && j==c-1) {console.log(path) ; return 1}
    
//     return maze(arr, r,c,i+1,j,path +" D" ) + maze(arr, r,c,i,j+1, path + " R") 
        
//     }
//     let arr = [[0,0,0,1],[0,1,0,0],[0,0,0,0]]
//     console.log(maze(arr,3,3,0,0,""))

// function permutationArray(arr, i,res){
//     let temp = [];
//     if(i==arr.length){ 
//     for(let i=0;i<arr.length;i++){ 
//         temp.push(arr[i]);}
//     res.push(temp);
//     return;
    
// }
//     for(let j=i;j<arr.length;j++){
//         swap(i,j,arr);
//         permutationArray(arr,i+1,res);
//         swap(i,j,arr);
//     }
     
// }
// let res = [];
// permutationArray([1,2,3],0,res);
// console.log(res); 
 

// function swap(i,j,arr){
//         let x = arr[i];
//         arr[i]= arr[j];
//         arr[j]= x;
//     }

//*****************Tower of Hanoi */
//  let counter = 0  
// function towerOfHanoi(n,s,h,d){
// if(n==1){
//     counter++
//     console.log(`Disc tranfered from Source +${s} to Destination +${d} @if`)
//     return counter;}

//     towerOfHanoi(n-1,s,d,h)
//     counter++
//     console.log(`Disc tranfered from Source +${s} to Destination +${d}`)
//     towerOfHanoi(n-1, h,s,d)

// }

// towerOfHanoi(3,"S","H","D")
// console.log(counter)

//**************Binary Number */
// function BinaryNumber(n,ans){
// if (n==0){
//     ans.reverse()
//     let ans1 = ans.join("") 
//  return ans1}
//    ans.push(n%2)
//    n = parseInt(n/2)
//    return BinaryNumber(n,ans)

// }
// console.log(BinaryNumber(12,[]))







