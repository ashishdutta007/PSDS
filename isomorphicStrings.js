/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length === 0) return true;

  return isIso(s, t) && isIso(t, s);
};

function isIso(s, t) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (map.has(sChar)) {
      if (map.get(sChar) !== tChar) {
        return false;
      }
    } else {
      map.set(sChar, tChar);
    }
  }
  return true;
}
// console.log("1 ", isIsomorphic("add", "egg"));
// console.log("2 ", isIsomorphic("foo", "bar"));
// console.log("3 ", isIsomorphic("paper", "title"));
// console.log("4 ", isIsomorphic("aba", "aab"));
// console.log("5 ", isIsomorphic("ab", "aa"));
