// Requirements: "1) Write a java program to print below pattern having numbers in pyramid form along with its mirror
// image ,, ref to the image
// 2) Write a program to find the second smallest number from array using loops concept
// Input -> [11,34,54,22,13,78]
// Output -> 13"


let arr = [11,34,54,22,13,78]
for(i=0;i<arr.length;i++){
    let temp =0
    for(j=1;j<arr.length-i;j++){
        if(arr[j]>arr[j+1]){
            temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1]= temp
        }
    }

}
console.log(arr[1])
