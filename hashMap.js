/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
	this.bucketList = [];
	this.length = 1000;
};

MyHashMap.prototype.hash = function(key) {
	return key % this.length;
};

MyHashMap.prototype.contains = function(key) {
	const index = this.hash(key);
	const bucket = this.bucketList[index];
	debugger;
	if (bucket && bucket.length >= 0) {
		const exist = bucket.findIndex(i => Object.keys(i)[0] == key);
		return exist > -1 ? true : false;
	}
	return false;
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
	const index = this.hash(key);
	let target = this.bucketList[index];
	debugger;
	if (target && target.length >= 0) {
		if (this.contains(key)) {
			const entry = target.find(i => Object.keys(i)[0] == key);
			entry[key] = value;
		} else {
			const obj = {};
			obj[key] = value;
			target.push(obj);
		}
	} else {
		const obj = {};
		obj[key] = value;
		this.bucketList[index] = [{ ...obj
		}];
		debugger;
	}
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
	if (this.contains(key)) {
		const index = this.hash(key);
		const bucket = this.bucketList[index];

		const entry = bucket.find(i => Object.keys(i)[0] == key);
		return !!entry ? entry[key] : -1;
	}
	return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
	if (this.contains(key)) {
		const index = this.hash(key);
		const bucket = this.bucketList[index];

		const entryIndex = bucket.findIndex(i => Object.keys(i)[0] == key);
		bucket.splice(entryIndex, 1);
	}
};


// Your MyHashMap object will be instantiated and called as such:
// var obj = new MyHashMap();
// console.log('new ', obj);
// console.log('put', obj.put(1, 10));
// console.log('put', obj.put(2, 20));
// var param_2 = obj.get(1);
// console.log('get', param_2);
// console.log(obj.remove(2));