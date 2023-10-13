/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], map.get(arr[i]) ? map.get(arr[i]) + 1 : 1);
  }
  let set = new Set();
  for (let [key, value] of map) {
    if (set.has(value)) return false;
    set.add(value);
  }
  return true;
};
