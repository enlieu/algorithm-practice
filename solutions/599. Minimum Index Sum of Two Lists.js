/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let map = new Map()
  let restaurants = [];
  
  for (let i = 0; i < list1.length; i++) {
    if (!map.has(list1[i])) {
      map.set(list1[i], [])
    }
    map.get(list1[i]).push(i)
  }
  
  for (let i = 0; i < list2.length; i++) {
    if (!map.has(list2[i])) {
      map.set(list2[i], [])
    } 
    map.get(list2[i]).push(i)
  }
  
  for (let [restaurant, idxs] of map.entries()) {
    if (idxs.length > 1) {
      restaurants.push([restaurant, idxs.reduce((acc, curr) => acc + curr)])
    }
  }
  
  let sortedByIdx = restaurants.sort((a, b) => a[1] - b[1])
  let bestIdx = restaurants[0][1]
  let filtered = sortedByIdx.filter((restaurant) => restaurant[1] === bestIdx)
  
  return filtered.map((restaurant) => restaurant[0])
};