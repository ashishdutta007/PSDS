/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const val = target - nums[i];
    if (map.has(val)) {
      return [map.get(val), i];
    }
    map.set(nums[i], i);
  }
};

var twoSum2 = function (nums, target) {
  const map = new Map();
  // O(N)
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) {
      const arr = map.get(nums[i]);
      arr.push(i);
    } else map.set(nums[i], [i]);
  }
  // O(N)
  for (let i = 0; i < nums.length; i++) {
    const val = target - nums[i];
    const arr = map.get(val);
    // true for only 1 "i"
    if (arr.length) {
      if (arr.length > 1) {
        return [i, arr[1]];
      }
      return [i, arr[0]];
    }
  }
};

var twoSum1 = function (nums, target) {
  const map = new Map();
  // O(n)
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const arr = map.get(nums[i]);
      arr.push(i);
    } else map.set(nums[i], [i]);
  }
  // O(nlogN)
  nums.sort((a, b) => a - b);
  let i = 0;
  let j = nums.length - 1;
  // O(N)
  while (i < j) {
    if (nums[i] + nums[j] === target) {
      const left = map.get(nums[i]).shift();
      const right = map.get(nums[j]).shift();
      return [left, right];
    } else if (nums[i] + nums[j] > target) {
      j--;
      continue;
    } else if (nums[i] + nums[j] < target) {
      i++;
      continue;
    }
  }
};

console.log("test1 ", twoSum([2, 3, 4], 6));
console.log("test2 ", twoSum([3, 3], 6));
