
// console.log("HCF of the two numbers")
// function hcfOfIntegers(num1, num2) {
//     snum = (num1 < num2) ? num1 : num2
//     let hcf =0
//     for (i = 1; i <= snum; i++) {
//         if (num1 % i === 0 && num2 % i === 0) {  console.log(i) }
//     }
//     console.log(hcf)

// }
// hcfOfIntegers(15, 30)
// hcfOfIntegers(15,10)


// console.log("HCF of the two numbers")
// function hcfOfIntegers(num1, num2) {
//     var snum = (num1 < num2) ? num1 : num2
//     // console.log(snum)
//     for (let i = snum; i >= 1; i--) {
//         if (num1 % i === 0 && num2 % i === 0) { console.log(i) ; break }
//     }
// }
// hcfOfIntegers(15, 30)
// hcfOfIntegers(15, 10)


// console.log(10%15)
// console.log(15%10)

function swap(arr,x,y){
    let temp = arr[x]
    arr[x ] = arr[y]
    arr[y]= temp
}

function sortInWaveForm(arr,n){
    for(i=1;i<n-1;i=i+2){
        if(arr[i]>arr[i-1]){
            swap(arr,i,i-1)
        }
        if(arr[i]>arr[i+1]){
            swap(arr,i,i+1)
        }

    }
console.log(arr)
}
arr = [3,5,6,7,1,12,9,18,4,16]
sortInWaveForm(arr,arr.length)