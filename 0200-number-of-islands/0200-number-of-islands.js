/**
 * @param {character[][]} grid
 * @return {number}
 */

const findLand = (grid, visited) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1 && !visited[i][j]) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};

const isValidRange = (e, rowEnd, colEnd) => {
  if (e[0] < 0 || e[0] >= rowEnd) return false;
  if (e[1] < 0 || e[1] >= colEnd) return false;
  return true;
};

var numIslands = function (grid) {
  const visited = Array(grid.length)
    .fill()
    .map(() => Array(grid[0].length).fill(false));

  const q = [];
  let ans = 0;
  let isFirst = true;
  let newLand;

  while (
    JSON.stringify((newLand = findLand(grid, visited))) !==
    JSON.stringify([-1, -1])
  ) {
    isFirst = false;
    q.push(newLand);
    visited[newLand[0]][newLand[1]] = true;

    const diff = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    while (q.length > 0) {
      let s = q.shift();
      for (let dif of diff) {
        let next = [s[0] + dif[0], s[1] + dif[1]];
        if (
          isValidRange(next, grid.length, grid[0].length) &&
          !visited[next[0]][next[1]] &&
          grid[next[0]][next[1]] == 1
        ) {
          q.push(next);
          visited[next[0]][next[1]] = true;
        }
      }
    }
    ans += 1;
  }
  if (isFirst) return 0;

  return ans;
};