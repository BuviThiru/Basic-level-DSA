// 1.n,m are the size of the unsorted arrays..Make single sorted array
// 2.Write code for finding the smallest element in an array."



let a =[3,6,8,9,13]
let b = [4,5,7,10,11]
let result = []
 let m =a.length
 let n = b.length
 let i=0; j=0;
 while(i<m && j<n){
    
     if(a[i]<b[j]) {
      result.push(a[i]) 
      i++ 
     }
     else{
         result.push(b[j])
         j++
     }
 }
 console.log(result)







let num = [10,2,45,-3,-17,4,9];
let min = 1;
for (i=0; i<num.length;i++){
    min> num[i]? min=num[i] :{}
}
console.log(`Smallest element in the array is ${min}`)