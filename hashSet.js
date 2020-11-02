/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
	this.bucketList = [];
	this.length = 1000;
};

MyHashSet.prototype.hash = function(key) {
	return key % this.length;
}

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
	if (!this.contains(key)) {
		const index = this.hash(key);
		if (this.bucketList[index] && this.bucketList[index].length >= 0) {
			this.bucketList[index].push(key);
		} else {
			this.bucketList[index] = [key];
		}
	} return false;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
	if (this.contains(key)) {
		const index = this.hash(key);
		const bucket = this.bucketList[index];

		const keyIndex = bucket.indexOf(key);
		bucket.splice(keyIndex, 1);
	}
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
	const index = this.hash(key);
	const bucket = this.bucketList[index];

	if (bucket && bucket.length) {
		return bucket.includes(key) ? true : false;
	}

	return false;
};


// Your MyHashSet object will be instantiated and called as such:
// var obj = new MyHashSet();
// obj.add(key);
// obj.remove(key);
// var param_3 = obj.contains(key);