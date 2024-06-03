/**
 * @param {character[][]} grid
 * @return {number}
 */

const findLand = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
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
  const q = [];
  let ans = 0;
  let isFirst = true;
  let newLand;
  const diff = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (
    JSON.stringify((newLand = findLand(grid))) !== JSON.stringify([-1, -1])
  ) {
    isFirst = false;
    q.push(newLand);
    grid[newLand[0]][newLand[1]] = 0;

    while (q.length > 0) {
      let s = q.shift();
      for (let dif of diff) {
        let next = [s[0] + dif[0], s[1] + dif[1]];
        if (
          isValidRange(next, grid.length, grid[0].length) &&
          grid[next[0]][next[1]] == 1
        ) {
          q.push(next);
          grid[next[0]][next[1]] = 0;
        }
      }
    }
    ans += 1;
  }
  if (isFirst) return 0;

  return ans;
};