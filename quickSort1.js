function swap(arr,i,j){
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j]= temp;
}
function partition(arr, low, high){
   let pivot = arr[high]
   let pointer = low
   for(let i = low;i<=high;i++){
       if(arr[i]<pivot){ swap(arr,i,pointer) ; pointer++}
       
   }
   swap(arr,high,pointer)
   return pointer
   
}

function quickSort(arr, low, high){
   if(low>=high) return
 let pivotindex = partition(arr,low,high)
 quickSort(arr,low,pivotindex-1)
 quickSort(arr,pivotindex+1,high)

}
let arr = [4, 5,6,3,2,1,8,9]
quickSort(arr,0,arr.length-1)
console.log(arr)
