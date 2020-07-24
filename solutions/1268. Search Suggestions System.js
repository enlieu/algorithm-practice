/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  let idx = 0;
  let ans = [];
  products.sort();

  for (let i = 0; i < searchWord.length; i++) {
    let res = [];
    let prefix = searchWord.slice(0, idx + 1);
    for (let j = 0; j < products.length; j++) {
      let product = products[j];
      if (product.startsWith(prefix)) {
        res.push(product);
      }
      if (res.length === 3) {
        break;
      }
    }
    ans.push(res);
    idx++;
  }
  return ans;
};
