let newArray = [];
const flatten = function(array) {
  if (array.length === 0) {
    return [];
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i].constructor === Array) {
      flatten(array[i]);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6])