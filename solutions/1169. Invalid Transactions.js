/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
  let invalid = new Set();
  let people = new Map()
  
  for (const transaction of transactions) {
    const [name,time,amount,city] = transaction.split(',');
    
    if (!people.has(name)) {
      people.set(name, [])
    }
    people.get(name).push([time, amount, city])
  }
  
  for (const name of people.keys()) {
    const personTransactions = people.get(name)
    for (let i = 0; i < personTransactions.length; i++) {
      const [time, amount, city] = personTransactions[i]
      const transaction = `${name},${time},${amount},${city}`
      if (amount > 1000) {
        invalid.add(transaction)
      }
      
      for (let j = i+1; j < personTransactions.length; j++) {
        const [time2, amount2, city2] = personTransactions[j]
        const transaction2 = `${name},${time2},${amount2},${city2}`
        if (Math.abs(time2-time) <= 60 && city !== city2) {
          invalid.add(transaction)
          invalid.add(transaction2)
        }
      }
    }
  }
  
  return Array.from(invalid);
};
​
​
