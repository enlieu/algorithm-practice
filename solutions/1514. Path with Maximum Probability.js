/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start, end) {

  let graph = new Map()
  
  for (let i = 0; i < edges.length; i++) {
        let [edge1, edge2] = edges[i]
        if (!graph.has(edge1)){
            graph.set(edge1, [])
        }
        if (!graph.has(edge2)){
            graph.set(edge2, [])
        }
        graph.get(edge1).push([edge2, succProb[i]])
        graph.get(edge2).push([edge1, succProb[i]])
    }

  let queue = [[start, 1]]
  let visited = new Set();
  
  while (queue.length) {
    let [begin, odds] = queue.shift()
    
    if (visited.has(begin)) continue
    visited.add(begin)
    
    if (begin === end) {
      return odds
    } 
    
    if (graph.has(begin)) {
      for (let [node, probability] of graph.get(begin)) {
        if (!visited.has(node)) {
          queue.push([node, odds * probability])
        }
      }
    }
    queue.sort((a, b) => b[1] - a[1])
  }
  return 0.000
};