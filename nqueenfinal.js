let n = 4
let grid = [
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_']
];
function isSafe(row, col, grid) {
    //is column safe?
    for (i = row - 1; i >= 0; i--) {
        if (grid[i][col] == "Q")
        return false;
    }
    //is left grid safe?
    for (i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (grid[i][j] == "Q")
        return false;
    }
    //is right grid safe?
    for (i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (grid[i][j] == "Q")
        return false;
    }
    return true;
}
let count = 0
function nQueen(row, grid) {
    // console.log(grid)
    if (row == n) {
        console.log( grid)
        count ++
        return  false
    }
    let queenplaced = false;
    for (let col = 0; col < n; col++) {
        if (isSafe(row, col, grid)) {
            grid[row][col] = "Q"

            queenplaced = nQueen(row + 1, grid)
            if (queenplaced == false) {
                grid[row][col] = "_";
            }
            else {
                return true
            }
        }
    }
    return queenplaced
}

nQueen(0, grid)
console.log("Total number of possible grids",count)