var checkInclusion = function (s1, s2) {
  const map = new Map();
  for (let i = 0; i < s1.length; i++) {
    if (map.has(s1[i])) {
      map.set(s1[i], map.get(s1[i]) + 1);
    } else {
      map.set(s1[i], 1);
    }
  }
  console.log(...map.entries());

  let i = 0;
  const wordLen = s1.length;
  while (i <= s2.length - wordLen) {
    if (isAnagram(s2.substring(i, i + wordLen), new Map(map))) {
      return true;
    }
    i++;
  }
  return false;
};

function isAnagram(str, map) {
  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) return false;
    if (map.has(str[i]) && map.get(str[i]) <= 0) return false;
    else map.set(str[i], map.get(str[i]) - 1);
  }
  return true;
}

console.log(checkInclusion("ido", "eidbaooo"));
