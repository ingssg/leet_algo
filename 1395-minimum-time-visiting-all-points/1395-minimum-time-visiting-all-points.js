var minTimeToVisitAllPoints = function (points) {
  let time = 0;

  for (let i = 0; i < points.length - 1; i++) {
    let start = points[i];
    let end = points[i + 1];
    let x_dif = Math.abs(end[0] - start[0]);
    let y_dif = Math.abs(end[1] - start[1]);
    time += Math.max(x_dif, y_dif);
  }
  return time;
};