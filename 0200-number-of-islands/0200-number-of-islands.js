/**
 * @param {character[][]} grid
 * @return {number}
 */

const numIslands = (grid) => {
  if (!grid.length || !grid[0].length)
    return 0;
  let ans = 0;
  let [rl, cl] = [grid.length, grid[0].length];
  const dfs = (i, j) => {
    if(i >= rl || i < 0 || j >= cl || j < 0 || grid[i][j] == '0') return;
    grid[i][j] = '0';

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }

  for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[0].length; col++) {
      if(grid[row][col] == '1') {
        dfs(row, col);
        ans += 1;
      }
    }
  }
  return ans;
};