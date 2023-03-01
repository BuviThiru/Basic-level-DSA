// "1. Implement the bubble sort algorithm to arrange a sequence of numbers from 1..100 in decreasing order. 
//    Analyze the time taken by the algorithm.
// 2. Perform the Time complexity analysis of bubble sort algorithm.

function bubblesortDecreasingOrder(arr,n){
    for(i=0;i<n-1;i++){
        for(j=0;j<n-i-1;j++){
            if(arr[j]<arr[j+1]){
                let temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
}
arr = [69, 5, 68, 72, 43, 57, 37, 39, 27, 75, 86, 91, 93, 47, 67, 98, 36, 30, 14, 9, 63, 65, 16, 61,
    49, 12, 77, 56, 7, 94, 19, 66, 24, 32, 44, 11, 51, 76, 82, 64, 2, 85, 13, 95, 84, 60, 10, 45, 34, 8, 40, 74, 31,
    83, 71, 33, 55, 54, 90, 70, 59, 15, 26, 80, 96, 23, 73, 88, 78, 97, 48, 21, 22, 17, 28, 87, 29, 81, 20, 89, 100,
    1, 6, 35, 53, 25, 52, 42, 79, 62, 50, 38, 4, 18, 46, 92, 58, 41, 99, 3]
bubblesortDecreasingOrder(arr,arr.length)
console.log(arr)


/* 
1st loop ==> runs n-1 times
2nd loop ==> n-1.....,3,2,1 ..sum of n-1 natural numbers ==> (n-1)(n-1+1)/2= n^2-n/2
Time complexity = n-1 + 1/2(n^2-n)

Time Complexity O(N^2);
Space Complexity O(1)
*/