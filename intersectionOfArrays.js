/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const map = new Map();
  const intersection = new Set();
  for (let num of nums1) {
    if (map.get(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }
  for (let num of nums2) {
    if (map.get(num)) {
      intersection.add(num);
    }
  }
  return [...intersection.values()];
};

console.log("intersection ", intersection([1, 2, 2, 1], [2, 2]));
