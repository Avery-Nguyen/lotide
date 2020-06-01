const middle = function(array) {
  let mid = [];
  const midIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return mid;
  } else if ((array.length % 2) === 0) {
    mid.push(array[midIndex - 1], array[midIndex]);
  } else if ((array.length % 2) !== 0) {
    mid.push(array[midIndex]);
  }
  return mid;
};

module.exports = middle;
