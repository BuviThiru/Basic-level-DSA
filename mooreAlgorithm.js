let arr =[2,3,5,7,8,3,6,3,1,3,6]
let majIndex =0
let count =1
for(let i=1;i<arr.length;i++){
    if(arr[majIndex]==arr[i]){
        count++
    }
    else {count--}
    if(count==0){
        majIndex =i
        count =1
    }
}
console.log(arr[majIndex])