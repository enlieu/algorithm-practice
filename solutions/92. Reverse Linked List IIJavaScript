/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    // move head until you hit m
    // reverse m through n
    // so @ node m-1, you have to keep a reference pointer there to connect to n after reversing the section
    // after reversing, connect m.next to node @ n+1. keep ref to n.next
    // Input: 1->2->3->4->5->NULL, m = 2, n = 4
    if (head === null) return null
    if (head.next === null) return head
    let prev = null
    let curr = head
    
    while(m > 1) { //traverse to m
        prev = curr
        curr = curr.next
        m--
        n--
    }
    let reconnect = prev // connect to the reversed part, points at 1
    let endOfReversed = curr // points at 2
    
    while(n > 0) { // traverse to n while reversing
        let nextNode = curr.next
        curr.next = prev
        prev = curr
        curr = nextNode
        n--
    }
    // prev pointing at 4, curr points at 5 
    console.log(head,'prev', prev)
    if (reconnect !== null) {
        reconnect.next = prev    
    } else {
        head = prev  
    }
    // console.log('curr',curr)
    // console.log("end", endOfReversed)
    endOfReversed.next = curr
    // console.log(head)
    return head
}
