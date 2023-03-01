/*
 [ [ 1 ], 
 [ 1, 1 ],
 [ 1, 2, 1 ], 
 [ 1, 3, 3, 1 ],
 [ 1, 4, 6, 4, 1 ] ]

*/




function pascalsTriangle(numRows) {
    let result = new Array(numRows);
    for (let i = 0; i < numRows; i++) {// created an array of size numrows
        result[i] = new Array(i + 1)//as i =0, adding +1
        result[i][0] = 1 // first elemt of all the row is 0
        result[i][i] = 1  // last element of all the rows is zer0
    }
    console.log(result)

    for (let i = 2; i < numRows; i++) { //start from 3rd row 
          for (let j = 1; j < result[i].length - 1; j++) { // in each row, we have to leave 1st and last elemt..so start from 1, end -1
            result[i][j] = result[i - 1][j - 1] + result[i - 1][j]
        }
    }
    return result
}
console.log(pascalsTriangle(5))









//Bhawesh

function sortExceptK(arr1, k) {
    let x = arr1[k]
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length - 1 - i; j++) {
            if (arr1[j] > arr1[j + 1]) {
                let temp = arr1[j]
                arr1[j] = arr1[j + 1]
                arr1[j + 1] = temp
            }
        }
    }
    console.log(arr1)
    let res = []

        for (i = 0; i < arr1.length; i++) {
            if (i == k) { res.push(x)}
            if (arr1[i] == x) continue
            else res.push(arr1[i])
        }
        console.log(res)
    }
    let arr1 = [3, 5, 6, 7, 1, 9, 2, 12, 8]
    sortExceptK(arr1, 4)
