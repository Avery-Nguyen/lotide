const flatten = function(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    let type = Array.isArray(array[i]);
    if (type) {
      for (let j = 0; j < array[i].length; j++) {
        newArr.push(array[i][j]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
};

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6])