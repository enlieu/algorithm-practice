/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (head === null) return null
    let cur = head;
    let stack = []
    while (cur != null){
        if (cur.child != null){
            if (cur.next != null) stack.push(cur.next)
            cur.next = cur.child
            cur.child.prev = cur
            cur.child = null
        }
        if (cur.next == null && stack.length){
            let nextNode = new Node(0)
            nextNode = stack.pop()
            cur.next = nextNode
            nextNode.prev = cur
        }
        cur = cur.next
    }
    return head
}