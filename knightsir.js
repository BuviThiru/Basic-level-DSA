// let N = 8;

// function isSafe(x, y, result) {
//   if (x >= 0 && x < N && y >= 0 && y < N && result[x][y] == -1) return true;
//   else false;
// }

// // Driver function
// function solveKnightTour() {
//   let result = new Array(8);
//   for (let i = 0; i < result.length; i++) result[i] = new Array(8);
//   //console.log(result);

//   // Initialization
//   for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) result[i][j] = -1;

//   // Knight's movements
//   let xMove = [ 1,2, -1, -2, -2, -1, 1, 2];
//   let yMove = [ 2,1, 2, 1, -1, -2, -2, -1];

//   // Knight starts from here
//   result[0][0] = 0;

//   if (!solveKnightRecursively(0, 0, 1, result, xMove, yMove)) {
//     console.log("Solution does not exist");
//     return false;
//   }
//   console.log(result);
// }
// // N = 2 // N x N = 2 x 2 = 4
// // [[0,1],
// //  [2,3]]
// function solveKnightRecursively(x, y, movei, result, xMove, yMove) {
//   let k, next_x, next_y;
//   // Base case
//   if (movei == N * N) return true;

//   for (k = 0; k < 8; k++) {
//     next_x = x + xMove[k]; // 4 + 1 = 5
//     next_y = y + yMove[k]; // 4 + 2 = 6

//     if (isSafe(next_x, next_y, result)) {
//       result[next_x][next_y] = movei;
//       if (
//         solveKnightRecursively(next_x, next_y, movei + 1, result, xMove, yMove)
//         //                                       64
//       )
//         return true;
//       else result[next_x][next_y] = -1; // Backtracking
//     }
//   }
//   return false;
// }

// // (0,0) == current coordinates
// // (2,1) == next_x, next_y

// solveKnightTour();
//check position of knight is safe or not
    let N=8;
function isSafe(arr,x,y,N){
    if(x>=0 && x<N && y >=0 && y<N && arr[x][y]==-1){
        return true;
    }
}
function kntTour(){
    // create new array with 8X8 matrix
    let arr=new Array(8);
    for(let i=0;i<arr.length;i++){
        arr[i]=new Array(8);
    }
    //intitalise with -1 each element
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            arr[i][j]=-1;
        }
    }
    //knight co-ordinates of xmove and ymove
    let xMove=  [-2,-2,-1,-1,1,1,2,2];
    let yMove=  [-1,1,-2,2,-2,2,-1,1];
    //initialise first element with 0
    arr[0][0]=0;
    if(!recureKnighTour(arr,0,0,1,xMove,yMove)){
        console.log("it does not exissts")
        return false
    }else{
        printSolution(arr,N)
        return true;
    }
}
function printSolution(arr,N){
    for(let x=0;x<N;x++){
        for(let y=0;y<N;y++){
            console.log(arr[x][y]+" ")
        }
        console.log("\n")
    }
}
function recureKnighTour(arr,x,y,iMove,xMove,yMove){
    let nextX,nextY;
    if(iMove==N*N){
        return true;
    }
    for(let i=0;i<8;i++){
         nextX=x+xMove[i];
         nextY=y+yMove[i];
        if(isSafe(arr,nextX,nextY,N)){
            arr[nextX][nextY]=iMove;
           if( recureKnighTour(arr,nextX,nextY,iMove+1,xMove,yMove)){
            return true;
           }
        else{
            arr[nextX][nextY]=-1;
        }
    }
}
    return false;
}
kntTour();