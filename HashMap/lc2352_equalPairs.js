/**
 * @param {number[][]} grid
 * @return {number}
 */

// 1. Brute Force
var equalPairs = function (grid) {
  const n = grid.length;
  let count = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (equal(row, col, n, grid)) count++;
    }
  }
  return count;

  function equal(row, col, n, grid) {
    for (let i = 0; i < n; i++) {
      if (grid[row][i] !== grid[i][col]) return false;
    }
    return true;
  }
};

// 2. HashMap
var equalPairs = function (grid) {
  const n = grid.length;
  const rowMap = new Map();
  for (let item of grid) {
    const key = item.toString();
    rowMap.set(key, (rowMap.get(key) || 0) + 1);
  }

  let count = 0;
  for (let j = 0; j < n; j++) {
    const col = [];
    for (let i = 0; i < n; i++) {
      col.push(grid[i][j]);
    }
    const key = col.toString();
    if (rowMap.has(key)) count += rowMap.get(key);
  }
  return count;
};
