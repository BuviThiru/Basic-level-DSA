function checkIfReverseSubarraySortsArray(arr){
    let start =0;
    let end = arr.length - 1;

    let temp = [];
    for(start=0; start<arr.length; start++) {
        temp[start] =  arr[start];
    }
    temp.sort();
    // 1,2,4,5,3,7,2
    // 1,2,2,3,4,5,7
    // 1,2,3,4,5,7

    console.log(temp);

    for(start=0; start<arr.length; start++) {
        if(arr[start] != temp[start]) {
            break;
        }
    }

    for(end=arr.length-1; end>=0; end--) {
        if(arr[end] != temp[end]) {
            break;
        }
    }

    if(start >= end) {
        return true;
    }

    do{
        if(arr[start] < arr[start+1]) {
            return false;
        }
    }while(start != end)

    return true;
}

let subSorted= [1,2,3,5,4,6];
console.log("checkIfReverseSubarraySortsArray "+checkIfReverseSubarraySortsArray(subSorted));