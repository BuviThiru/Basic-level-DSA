let n = 8

function isSafe(x,y,res){//program to check if the position is safe
    if (x >= 0 && x < n && y >= 0 && y < n && res[x][y] == -1) return true;
    else return false; 
}

function knightTour() {
    let res = new Array(n)// creating empty array of size n x n
    for (let i = 0; i < n; i++) {
        res[i] = new Array(n)
    }
   
    
    for (let i = 0; i < n; i++) {// Initializing the value as -1
        for (let j = 0; j < n; j++) {
            res[i][j] = -1
        }
    }
  
    let xmove = [2, 1, -1, -2, -2, -1, 1, 2]  //how the knight can move in row n colummns
    let ymove = [1, 2, 2, 1, -1, -2, -2, -1]

    res[0][0] = 0   //initializing start position as 0

    if (!solveKnightTour(0, 0, 1, res, xmove, ymove)) {
        console.log("Solution Does Not Exists")
        return false
    }
    console.log(res)
}


function solveKnightTour(x, y, movei, res, xmove, ymove) {
    let nextX, nextY
     if(movei == n*n){ //if movei is 64 return... base case
        return true
     }
    for (let k = 0; k < n; k++) {
        nextX = x + xmove[k] //next position
        nextY = y + ymove[k]  //next position

        if (isSafe(nextX, nextY, res)) {  //is next position safe?
            res[nextX][nextY] = movei //if safe give the value of movei

            if (solveKnightTour(nextX, nextY, movei + 1, res, xmove, ymove))
                return true
            else
                res[nextX][nextY] = -1 //backtracking
        }
    }
    return false
}
knightTour()



/*
  [
    [  0, -1, -1,  -1,  -1, -1, -1, -1 ],
    [  -1, -1, -1, -1,  -1, -1, -1, -1 ],
    [  -1,  1, -1, -1,  -1, -1, -1, -1 ],
    [  -1, -1, -1, -1,  -1, -1,  -1, -1],
    [   2, -1,  4, -1,   6, -1,   8, -1],
    [  -1, -1, -1, -1,  -1, -1,   11, -1],
    [  -1,  3, -1,  5,  -1,  7,  -1,   9],
    [  -1, -1, -1, -1,  -1, 10,  -1,  12]
  ]
*/
