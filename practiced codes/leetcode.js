// var isValid = function(s) {
//     s1 = s.split("")
//     console.log(s1)
//     let m = parseInt ((s1.length/2))-1
//     console.log(m)

// let a ="", b = "";
// let n = m+1
// for(i=m,n=m+1;i>=0;i--,n++){
//     a = String(s1[i])
//     b = String(s1[n])
//     console.log(typeof b)
//     console.log(a,b)
//        if(a !== b) { return false; break}
 
// }
// return true
// };
// console.log(isValid("()"))

// let a ="("
// let b = "]"
// if (a!=b) console.log (true)

function subarraySum(arr, n, s)
    { 
        // console.log(n,s)
        
      let res = []
        for(let i = 0;i<=n-1;i++){
            let s1 =0
            for(let j=i;j<=n-1;j++){
                s1 = s1+arr[j]; 
                // console.log(arr[j],s1)
                if(s1 == s) {res.push(i,j); return res}
                if(s1>s) {break}
            }
                
        }
        return -1
    } 
   
    console.log(subarraySum([1,2,3,7,5],5,171))