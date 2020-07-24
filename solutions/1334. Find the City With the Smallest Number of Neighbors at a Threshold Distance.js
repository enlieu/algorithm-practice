/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
  let graph = new Map();
  let citiesWithinDistance = new Map()
  
  for (let i = 0; i < n; i++) {
    if (!citiesWithinDistance.has(i)) {
      citiesWithinDistance.set(i, new Set())
    }
  }

  for (const [from, to, weight] of edges) {
    if (!graph.has(from)) {
      graph.set(from, [])
    } 
    if (!graph.has(to)) {
      graph.set(to, [])
    }
    graph.get(from).push([to, weight])
    graph.get(to).push([from, weight])
  }
  
  for (let i = 0; i < n; i++) {
    if (!graph.has(i)) {
      graph.set(i, [])
    }
  }
  
  for (let i = 0; i < n; i++) {
    let visited = new Set()
    let queue = [[i, 0]]
    while (queue.length) {
      let [city, currDistance] = queue.shift();
      
      if (visited.has(city)) continue
      visited.add(city)
   
      for (let cities of graph.get(city)) {
        let [destination, distance] = cities
        if (currDistance + distance <= distanceThreshold) {
          
          queue.push([destination, currDistance + distance])
          
          if (i !== destination) citiesWithinDistance.get(i).add(destination) 
        }
      }
      queue.sort((a, b) => a[1] - b[1])
    }
  }
  
  let vals = [...citiesWithinDistance.entries()]
  let sorted = vals.sort((a, b) => a[1].size - b[1].size || b[0] - a[0])
  
  return sorted[0][0]
};