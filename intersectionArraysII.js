/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// Time - O(N) - 2 iterations
// Space - O(N) - 1  hash map
var intersect = function (nums1, nums2) {
  const map = new Map();
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      map.set(nums1[i], map.get(nums1[i]) + 1);
    } else {
      map.set(nums1[i], 1);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map.get(nums2[i]) > 0) {
      map.set(nums2[i], map.get(nums2[i]) - 1);
      result.push(nums2[i]);
    }
  }
  return result;
};
