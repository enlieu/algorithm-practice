/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  let res = []
  //highest to shortest, sorted by how many people are ahead of them
  let sorted = people.sort((a, b) => {
    //if the heights are the same
    if (a[0] === b[0]) {
      //sort by the number of people ahead of them in queue, ascending
      return a[1] - b[1]
    } else {
      //if the heights aren't the same, sort by height ascending
      return b[0] - a[0]
    }
  })
  
  sorted.forEach((val) => res.splice(val[1], 0, val))
  
  return res;
};