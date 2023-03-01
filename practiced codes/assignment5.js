// Requirements: "1. Given a positive integer A, find a pair of integer a, b such that
// a and b are positive
// A <= B
// a^2 + b^2 = A
// 0<=A<=100000
// 2. Item delivery needs to take place for a circle of size B. Suppose we start from the position C (given)
// then find the position where the Ath item will be delivered.
// Note: Distribution of Items are performed at the adjacent positions starting from C.
// Expected Input: Three integers A, B, C
// Expected Output: Integer denoting the position of the delivery of the Ath item if started from position C. 
// ( there are a few tables in the doc,refer to the assignment soln)"


function integer(num){
for (i=1; i<=num; i++){
    for (j=1; j<=num; j++)
      if ((i*i) + (j*j) ==  num )
      console.log (`For the given number ${num} - (${i} , ${j})`)
}
}
integer (50)
integer (5)




function findPosition(A,B,C) {
    let position=  (B+C-2)%(A)+1;
    console.log (`The position of the delivery - ${position}`)
 }
 findPosition(5,8,2)

