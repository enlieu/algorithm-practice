/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    //step 1 - build a graph via an adjacency lists
    //loop through prereqs and get them in a list
    
    let adjList = {};
    let cycle = false;
    let visited = new Array(numCourses).fill(0);
    
    //adj list set up
    for (let i = 0; i < prerequisites.length; i++) {
        let [c1, c2] = prerequisites[i];
        if (!adjList.hasOwnProperty(c1)) {
            adjList[c1] = [c2];
        } else {
            adjList[c1].push(c2);
        }
    };
    console.log("adj", adjList)
    //prereqs  -  2 , [[1,0]]
    //adjList - {1: [0]}
    //Visited - [0, 0]
    //course - 0
    for (let course = 0; course < visited.length; course++) {
        
        if(visited[course] === 0) dfs(course, visited, adjList);
    }
    
    function dfs(course, visited, adjList) {
        //if adjList[0] exists...
        
        if (adjList[course]) {
            for (const prereq of adjList[course]) {
                //[0]
                if (visited[prereq] === 0) {
                    visited[course] = 1;
                    dfs(prereq, visited, adjList)
                    //dfs(0, [0,1], adjList)
                } else if (visited[prereq] === 1) {
                    console.log("flips?", prereq)
                    cycle = true;
                }
            }
            
            //to signify that we've traversed all its neighbors
            visited[course] = 2;
        }
        
    }
    
    return !cycle;
}