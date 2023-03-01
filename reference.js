54
function merge(arr, start, mid, end) {
  // left part = start - mid
  // right part = mid+1 - end
  let leftStart = start, leftEnd = mid;
  let rightStart = mid + 1, rightEnd = end;
  let leftArr = [], rightArr = [];
  for (let x = leftStart; x <= leftEnd; x++) {
      leftArr.push(arr[x]);
  }
  for (let x = rightStart; x <= rightEnd; x++) {
      rightArr.push(arr[x]);
  }
  let i = 0, j = 0, m = leftArr.length, n = rightArr.length;
  let k = start;
  while (i < m && j < n) {
      if (leftArr[i] <= rightArr[j]) {
          arr[k] = leftArr[i];
          i++;
          k++;
      }
      else {
          arr[k] = rightArr[j];
          j++;
          k++;
      }
  }
  // If we have remaining elements in both array the we will push the remaining elements to resultArr through this.
  while (i < m) {
      arr[k] = leftArr[i];
      i++;
      k++;
  }
  while (j < n) {
      arr[k] = rightArr[j];
      j++;
      k++;
  }
}
function mergeSort(arr, start, end) {
  // base case
  if (start >= end) {
      return;
  }
  let mid = parseInt((start + end) / 2);
  // recursive work
  mergeSort(arr, start, mid); // sort left part
  mergeSort(arr, mid + 1, end); // sort right part
  // self-work
  merge(arr, start, mid, end); // merging left and right sorted part
}
let arr = [30, 20, 10, 50, 320, 56, 12, 27];
// console.log(arr);
mergeSort(arr, 0, 7);
console.log(arr);