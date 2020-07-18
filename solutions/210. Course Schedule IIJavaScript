/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  let graph = new Map()
  let courseOrder = new Set()  
  
  for (let prereq of prerequisites) {
    let [pre, course] = prereq
      if (!graph.has(pre)) {
        graph.set(pre, [])
      } 
    graph.get(pre).push(course)
  }
  
  for (let i = 0; i < numCourses; i++) {
    if (!graph.has(i)) {
      graph.set(i, [])
    }
  }

  let queue = []

  for (let [course, pre] of graph) {
    if (graph.get(course).length === 0) {
      queue.push(course)
    }
  }
  
  while (queue.length) {
    let current = queue.shift();
    
    
    if (!courseOrder.has(current)) {
      courseOrder.add(current)  
        for (let [course, pre] of graph) {
        //if every prereq is in courseOrder and the courseOrder doesn't have the course
        if (!courseOrder.has(course) && graph.get(course).every((pre) => courseOrder.has(pre))) {
          queue.push(course)
        }
      }
    }
  }
  
    return courseOrder.size === numCourses ? [...courseOrder] : []
};