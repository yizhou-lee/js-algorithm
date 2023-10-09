/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let low = 1;
  let high = Math.max(...piles);
  let k = high;
  while (low < high) {
    const speed = Math.floor((low + high) / 2);
    const time = piles.reduce((acc, cur) => acc + Math.ceil(cur / speed), 0);
    if (time <= h) {
      high = speed;
      k = speed;
    } else {
      low = speed + 1;
    }
  }
  return k;
};
