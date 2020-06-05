var hasPathSum = function (root, sum) {
  if (root === null) {
    return false;
  }

  let queue = [root];

  let currentSum = root.val;

  while (queue.length) {
    let current = queue.shift();
    if (!current.left && !current.right && current.val == sum) {
      return true;
    }

    if (current.left) {
      current.left.val += current.val;
      queue.push(current.left);
    }

    if (current.right) {
      current.right.val += current.val;
      queue.push(current.right);
    }
  }
  return false;
};
