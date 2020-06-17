
var UndergroundSystem = function() {
  this.checkIns = {};
  this.trips = {};
  
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.checkIns[id] = {t: t, stationName: stationName};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  let route = this.checkIns[id].stationName + ' to ' + stationName;
  
  if (route in this.trips === false) {
    this.trips[route] = []
  }
    this.trips[route].push(t - this.checkIns[id].t)
  
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  let route = startStation + ' to ' + endStation
  let sum = 0;
  
  for (let i = 0; i < this.trips[route].length; i++) {
    sum += this.trips[route][i]
  }
    return sum / this.trips[route].length
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */