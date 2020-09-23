/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let totalGas = gas.reduce((a, b) => a + b)
  let totalCost = cost.reduce((a, b) => a + b)
  
  if (totalCost > totalGas) return -1
  
  let curr = 0;
  let start = 0;
  
  for (let i = 0; i < gas.length; i++) {
    curr += gas[i] - cost[i]
    if (curr < 0) {
      start = i+1;
      curr = 0;
    }
  }
  
  return start;
};
