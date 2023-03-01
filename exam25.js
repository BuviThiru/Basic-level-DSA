// const ConvertSingle = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         	 // use process.stdout.write("hello") to print the output
//   	 //implement your  logic here - you don't have to return anything, print the output here
//     if(arr[i]<=9)continue;
// 	else{(arr[i] = add(arr[i]));
//     }
	
// 	}
//     return arr;
// }

// const add = (num) => {
// 	let sum =0;
//     while (num > 0) {
//         console.log("====>",num)
//         sum = sum+num%10
// 		num =parseInt(num/10)
       	
//     }
//     console.log(sum)
//     return sum;
// }
// let arr = [1,2,14,15,16,234]
// console.log(ConvertSingle(arr))


const ConvertSingle = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<=9)continue;
        else(arr[i] = add(arr[i]))
}
return arr;
}

const add = (num) => {
    while (num > 9) {
    var sum =0;
    while(num>0){
        sum = sum+num%10
        num =parseInt(num/10)
    }
	 
}
num = sum;
console.log(num,sum)
return num;
    }
let arr = [1,2,14,15,16,234]
console.log(ConvertSingle(arr))