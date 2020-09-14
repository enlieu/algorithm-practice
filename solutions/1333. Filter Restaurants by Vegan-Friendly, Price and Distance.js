/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
  let filtered = [];
  for (const restaurant of restaurants) {
    let [id, rating, vegan, price, distance] = restaurant;
    if (veganFriendly) {
      if (price <= maxPrice && distance <= maxDistance && vegan === 1) {
        filtered.push(restaurant)
      }
    } else {
      if (price <= maxPrice && distance <= maxDistance) {
        filtered.push(restaurant)
      }
    }
  }
  
  return filtered.sort((a, b) => b[1] - a[1] || b[0] - a[0]).map((restaurant) => restaurant[0])
};
