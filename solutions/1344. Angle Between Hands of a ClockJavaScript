/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    //every six minutes, the hour hand moves 1.5 degrees
    //360 / 12 = 30 degrees for each hour, 12 = 0
    //60 minutes in an hour, each minue is 6 degrees
    
    let hourHand = hour < 12 ? (hour * 30) + (minutes / 6) * 3 : (minutes / 6) * 3
    let minuteHand = minutes * 6
    let absAngle = Math.abs(minuteHand - hourHand)
    
    return Math.min(absAngle, 360 - absAngle)
    
    
};