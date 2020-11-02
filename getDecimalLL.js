/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var getDecimalValue = function (head) {
  let current = head;
  let arr = [];
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  let decimal = 0;
  for (let i = 0; i < arr.length; i++) {
    decimal += arr[i] * Math.pow(2, arr.length - i - 1);
  }
  return decimal;
};

const three = new ListNode(1, null);
const two = new ListNode(0, three);
const one = new ListNode(1, two);
console.log(getDecimalValue(one));
