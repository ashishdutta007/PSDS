/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber1 = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] !== nums[i + 1] && nums[i + 1] !== nums[i + 2]) {
      return nums[i];
    }
  }
};

var singleNumber = function (nums) {
  const map = new Map();
  for (let num of nums) {
    if (map.get(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }
  for (let [key, value] of map.entries()) {
    if (value === 1) return key;
  }
  return -1;
};

// console.log(singleNumber([2, 1, 2]));
