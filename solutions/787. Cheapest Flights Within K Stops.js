/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    let graph = {} // {from: {to: price, to2: price2...}} 
    
    for (let [source, destination, price] of flights){ 
        // { '0': { '1': 100, '2': 500 }, '1': { '2': 100 } }
        if (!graph.hasOwnProperty(source)){
            graph[source] = {}
        }
        graph[source][destination] = price    
    }
    // console.log(graph)
    let queue = [[src, 0, 0]]
    
    while(queue.length){
        let [city, price, stops] = queue.shift()
        if (city == dst) return price
        if (stops > K) continue
        
        if (graph[city]) {
            for (let neighbor in graph[city]) {
                let currPrice = graph[city][neighbor] // weighted edge aka price of this leg
                queue.push([neighbor, currPrice + price, stops+1])             
            }
        }
        // console.log('before',queue)
        queue.sort((a,b) => a[1]-b[1])
        // console.log('after',queue)
    }
    return -1
    
}