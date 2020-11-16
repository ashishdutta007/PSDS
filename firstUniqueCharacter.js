/**
 * @param {string} s
 * @return {number}
 */
// Time - O(N) - loop on s & map.get() avg time is O(1)
// Space - O(N) - one hash map
var firstUniqChar = function (s) {
  if (s === "") return -1;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i] + 1));
    } else {
      map.set(s[i], 1);
    }
  }
  // console.log(...map.entries());
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) === 1) {
      return i;
    } else if (i === s.length - 1) {
      return -1;
    }
  }
  // console.log(firstUniqChar("leetcode"));
};
