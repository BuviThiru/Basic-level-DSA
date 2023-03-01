// const num=[1,2,3,4,5];

// // const total=[num,[6,7,8,9]]
// // console.log(total)
// console.log(num[1]);
// // console.log(total[1][2]);

// const total=[

// [1,2,3,4],
// [5,6,7,8],
// [9,10,11,12]

// ]

// console.log(total[1][3]);

// const num=[1,2,4,5,6] 
// // const ans=[
// //     [1],[2],[3].
// // ]
// const ans=[[1,2],[2,4]]
// for(let i=0;i<num.length;i++){


//     let arr=[];
//     arr=[2,4]
//     arr.push(num[i])//
//     arr.push(num[i+1])//
//     ans.push(arr);
//     i++;
// }
// console.log(ans);


// const obj={ 
//     //literal way to create objects
//     name:"refrigirator",
//     price:35000,
//     brand:"samsung",
//     }
    
//     // for in loop
//     // for(const keys in obj){//1.) name 2.)price 3>)brand
//     // console.log(keys +"==>"+obj[keys])
//     // }


// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// const trr=Object.entries(obj);
// for(let i=0;i<trr.length;i++){
// console.log(trr[i][0]+"==>"+trr[i][1])

// }



// function add(a,b){
// return a+b;
// }
// console.log(add(10,20))//<---30



/*

0123    01234
             0 1 2 3 4
            cs=0        ce=4
      0=rs  0   1 2 3 4 6
            1   5 6 7 8 7
            2   9 2 3 4 8
      3=re  3   5 6 8 9 1

   1234678198
   1
   2
   3

*/

//spiral form

// var arr=[[1,2,3,4,6],[5,6,7,8,7],[9,2,3,4,8],[5,6,8,9,1]]
// console.log(arr)
// var str="";
// let rs=0,re=arr.length-1,cs=0,ce=arr[0].length-1;
// while(rs<=re && cs<=ce){
//     for(let i=cs;i<=ce;i++){
//         str+=arr[rs][i]
//      }
//     rs++;
//     for(let i=rs;i<=re;i++){
//         // str+=arr[i][ce];
//         str+=arr[i][ce]
//     }
//     ce--;
//         for(let i=ce;i>=cs;i--){
//         str+=arr[re][i];
//     }
//     re--;
//         for(let i=re;i>=rs;i--){
//         str+=arr[i][cs];
//     }
//     cs++;



// }

// console.log(str)



// const obj={
// name:"Shubham",
// location:{
//     city:"bombay",

// }

// }

// const {location,name}=obj;
// console.log(name);
// console.log(location.city);





