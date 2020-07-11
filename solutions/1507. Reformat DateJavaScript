/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
  let monthHash = {'Jan' : '01', 'Feb' : '02', 'Mar' : '03', 'Apr': '04', 'May' : '05', 'Jun' : '06', 'Jul' : '07', 'Aug' : '08', 'Sep' : '09', 'Oct' : '10', 'Nov' : '11', 'Dec' : '12'}
  
  let split = date.split(' ')
  
  let [day, month, year] = split
  
  let dayNum = day.slice(0, -2)
  
  if (dayNum.length < 2) dayNum = '0'.concat(dayNum)
  
  return `${year}-${monthHash[month]}-${dayNum}`
};