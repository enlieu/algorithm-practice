/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  let graph = new Map();
  let res = [];
  
  for (let i = 0; i < equations.length; i++) {
    if (!graph.has(equations[i][0])) graph.set(equations[i][0], [])
    if (!graph.has(equations[i][1])) graph.set(equations[i][1], [])
    
    graph.get(equations[i][0]).push([equations[i][1], values[i]])
    graph.get(equations[i][1]).push([equations[i][0], 1 / values[i]])
  }
  
  const evaluate = (query) => {
    if (!graph.has(query[0]) || !graph.has(query[1])) {
      res.push(-1.0) 
      return;
    } 
    
    if (query[0] === query[1]) {
      res.push(1.0)
      return;
    }
    
    let queue = [...graph.get(query[0])]
    let seen = new Set();
    
    while (queue.length) {
      let current = queue.shift();
      if (current[0] === query[1]) {
        res.push(current[1])
        return;
      } 
      seen.add(current[0])
      
      let neighbors = graph.get(current[0])
      
      for (let i = 0; i < neighbors.length; i++) {
        if (seen.has(neighbors[i][0])) continue;
        queue.push([neighbors[i][0], neighbors[i][1] * current[1]])
      }
    }
    res.push(-1.0)
    return;
  }
  
  for (const query of queries) {
    evaluate(query)
  }
  
  return res;
};
