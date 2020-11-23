var findAnagrams = function (s, p) {
  if (p.length > s.length) return [-1];
  const map = new Map();
  for (let i = 0; i < p.length; i++) {
    if (map.has(p[i])) {
      map.set(p[i], map.get(p[i]) + 1);
    } else {
      map.set(p[i], 1);
    }
  }
  const indices = [];
  const pLen = p.length;
  for (let i = 0, j = i + pLen - 1; j < s.length; i++, j++) {
    // let hMap = Object.assign({}, map);
    let newMap = new Map(map);
    if (isAnagram(i, j, s, newMap)) {
      indices.push(i);
    }
  }
  return indices;
};
function isAnagram(i, j, s, hMap) {
  debugger;
  for (let k = i; k <= j; k++) {
    if (!hMap.has(s[k])) {
      console.log("F ", i, j, s);
      return false;
      i;
    } else if (hMap.has(s[k]) && hMap.get(s[k]) <= 0) {
      console.log("F ", i, j, s);
      return false;
    } else {
      hMap.set(s[k], hMap.get(s[k]) - 1);
    }
  }
  console.log("T ", i, j, s);
  return true;
}

console.log(findAnagrams("cbaebabacd", "abc"));
