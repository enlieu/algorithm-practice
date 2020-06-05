var destCity = function (paths) {
  let a = [];
  let b = [];

  for (let i = 0; i < paths.length; i++) {
    let cityA = paths[i][0];
    let cityB = paths[i][1];

    a.push(cityA);
    b.push(cityB);
  }

  let noIntersect = b.filter((city) => !a.includes(city));

  return noIntersect[0];
};
