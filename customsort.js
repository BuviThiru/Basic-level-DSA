// const customSort = (order, arr) => {
//     const numberObj = {};
//     const resArr = [];

// order.split('').map((item, index) => {
//         numberObj[item] = {
//             value: [],
//             order: index

//         };
//     })
// console.log(numberObj)
//     arr.map(item => {
//         numberObj[item].value.push(item);
//     });

//     const sortedObj = Object.values(numberObj).sort((a, b) => (a.order > 
// b.order) ? 1 : -1);

//     Object.values(sortedObj).map(item => {

//         resArr.push(...item.value)

//     });

//     return resArr.join(' ');

// }

// const order = '2356481790';


// const arr = [1, 2, 9, 3, 1, 5, 6, 2, 8, 9, 0];


const customSort = (order, arr) => {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {//conversts array into object

        if (!obj[arr[i]]) {//if object does not have arr[i],then value =1..initializing
             obj[arr[i]] = 1 
            }
        else { obj[arr[i]]++ }//if present already, increase its ffrequency
    }
    console.log(obj)
    let res = []
    for (let i = 0; i < order.length; i++) {//iterate through order string
        if (obj[order[i]]) { //if obj has the element
            for (let k = 0; k < obj[order[i]]; k++) {
                res.push(order[i])
            }
        }
    }
    return res
}
const order = '2356481790';
const arr = [1, 2, 9, 3, 1, 5, 6, 2, 8, 9, 0];

console.log(customSort(order, arr));




