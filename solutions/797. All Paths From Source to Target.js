/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let paths = new Map();
  let numPaths = [];

  for (let i = 0; i < graph.length; i++) {
    paths.set(i, graph[i]);
  }

  let queue = [[0, paths.get(0), []]];

  while (queue.length) {
    let [node, connections, currPath] = queue.shift();

    currPath = currPath.concat(node);

    if (connections.length > 0) {
      for (const path of connections) {
        //pushing into the queue the next node in the path, that node's connections, and the nodes traversed so far
        queue.push([path, paths.get(path), currPath]);
      }
    }

    if (node === graph.length - 1) {
      numPaths.push(currPath);
    }
  }
  return numPaths;
};
