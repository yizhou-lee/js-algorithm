/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  const a = n ^ (n >> 1);
  return (a & (a + 1)) === 0;
};
