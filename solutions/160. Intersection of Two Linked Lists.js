/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) return null;
  
    let lengthA = 0, lengthB = 0;
  
    function intersects(nodeA, nodeB) {
        while (nodeA.next !== null) {
            nodeA = nodeA.next;
            lengthA++;
        }
        while (nodeB.next !== null) {
            nodeB = nodeB.next;
            lengthB++;
        }
        return nodeA === nodeB;
    }
  
  
    if (!intersects(headA, headB)) return null;
  
  
    if (lengthA > lengthB) {
        while (lengthA - lengthB) {
            headA = headA.next;
            lengthA--;
        }
    } else {
        while (lengthB - lengthA) {
            headB = headB.next;
            lengthB--;
        }
    }
    while (headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
};