/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// Time - O(N^2) - worst case [1,2,3,2,1], 4
// Space - O(N) - one hash map
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const dups = map.get(nums[i]);
      for (let j of dups) {
        if (Math.abs(i - j) <= k) {
          return true;
        }
      }
      map.get(nums[i]).push(i);
    } else {
      map.set(nums[i], [i]);
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 3));
