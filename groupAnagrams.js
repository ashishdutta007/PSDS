/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const s = strs[i].split("").sort().join("");
    if (map.has(s)) {
      const val = map.get(s);
      val.push(strs[i]);
    } else {
      map.set(s, [strs[i]]);
    }
  }
  const res = [];
  for (let val of map.values()) {
    res.push(val);
  }
  return res;
};
