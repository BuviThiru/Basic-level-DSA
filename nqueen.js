let n = 4
let grid = [
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_']
];
function isSafe(currentRow, currentColumn, grid) {
    //is column safe?
    for (i = currentRow - 1; i >= 0; i--) {
        if (grid[i][currentColumn] == "Q")
        return false;
    }
    //is left grid safe?
    for (i = currentRow - 1, j = currentColumn - 1; i >= 0 && j >= 0; i--, j--) {
        if (grid[i][j] == "Q")
        return false;
    }
    //is right grid safe?
    for (i = currentRow - 1, j = currentColumn + 1; i >= 0 && j < n; i--, j++) {
        if (grid[i][j] == "Q")
        return false;
    }
    return true;
}
let count = 0
function nQueen(row, grid) {
    // console.log(grid)
    if (row == n) {
        console.log(grid)
        count ++
        return  
    }
    let queenplaced = false;
    for (let j = 0; j < n; j++) {
        if (isSafe(row, j, grid)) {
            grid[row][j] = "Q"

            queenplaced = nQueen(row + 1, grid)
            if (queenplaced == false) {
                grid[row][j] = "_";
            }
            else {
                return true
            }
        }
    }
    return queenplaced
}
console.log(nQueen(0, grid))