/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
​
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;
    
    let map = new Map();
    let queue = [node];
    
    map.set(node, new Node(node.val))
-
    while (queue.length) {
        let current = queue.shift();
        for (const neighbor of current.neighbors) {
            if (!map.has(neighbor)) {
                map.set(neighbor, new Node(neighbor.val))
                // {val, {val: val, neighbor: []}}
                queue.push(neighbor)
                //[{val: nb.val, neighbors: [{}, {}]}]
            }
            map.get(current).neighbors.push(map.get(neighbor))
        }
    }
    
    return map.get(node)
};
