/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (t.length != s.length) return false;

  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  // console.log(...map.entries());
  for (let i of t) {
    if (map.has(i) && map.get(i) <= 0) {
      return false;
    } else if (!map.has(i)) {
      return false;
    }
    map.set(i, map.get(i) - 1);
  }
  return true;
};

// console.log(isAnagram('aacc', 'ccac'));
// console.log(isAnagram('ab', 'a'));
