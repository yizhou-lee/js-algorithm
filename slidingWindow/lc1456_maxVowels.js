/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let sum = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) sum++;
  }
  let maxSum = sum;
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) {
      sum++;
    }
    if (vowels.has(s[i - k])) {
      sum--;
    }
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};
