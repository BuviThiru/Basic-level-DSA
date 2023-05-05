function replaceNumber(arr){
    let product =1;
    for(let i=0;i<arr.length;i++){
        product = product*arr[i]

    }
    console.log(product)
    for(let i=0;i<arr.length;i++){
        arr[i] = product/arr[i]
    }
 return arr
}
console.log(replaceNumber([1,2,3,4,5]))