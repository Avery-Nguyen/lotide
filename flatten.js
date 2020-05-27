const assertArraysEqual = function(arr1, arr2) {
  let result = true;
  if (result) {
    arr1.forEach(element => {
      arr2.forEach(element2 => {
        if (element === element2) {
          result = true;
        } else {
          return result = false;
        }
      });
    });
  }
  if (!result) {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let result = true;
  if (result) {
    arr1.forEach(element => {
      arr2.forEach(element2 => {
        if (element === element2) {
          result = true;
        } else {
          return result = false;
        }
      });
    });
  }
  return result;
};

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

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6])