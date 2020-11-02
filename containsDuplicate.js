/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var set = new MyHashSet();
  for (let i = 0; i < nums.length; i++) {
    if (set.contains(nums[i])) {
      return true;
    } else {
      set.add(nums[i]);
    }
  }
  return false;
};

/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this.bucketList = [];
  this.length = 10;
};

MyHashSet.prototype.hash = function (key) {
  return key % this.length;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const index = this.hash(key);
  if (this.bucketList[index] && this.bucketList[index].length >= 0) {
    this.bucketList[index].push(key);
  } else {
    this.bucketList[index] = [key];
  }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const index = this.hash(key);
  const bucket = this.bucketList[index];
  debugger;
  if (bucket && bucket.length) {
    return bucket.includes(key) ? true : false;
  }
  return false;
};

// console.log("Duplicate ? ", containsDuplicate([10, 0]));
