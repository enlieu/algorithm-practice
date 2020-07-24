/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let cache = [1]
    let p2 = 0
    let p3 = 0
    let p5 = 0;

    for (i = 1; i < n; i++) {
        let r2 = cache[p2] * 2;
        let r3 = cache[p3] * 3;
        let r5 = cache[p5] * 5;
        let min = Math.min(r2, r3, r5);
        if (min === r2) p2++;
        if (min === r3) p3++;
        if (min === r5) p5++;
        cache[i] = min;
    }
  
    return cache[cache.length-1];
};