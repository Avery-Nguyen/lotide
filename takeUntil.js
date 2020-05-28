const assertArraysEqual = function(actual, expected) {
  let result = true;
  if (result) {
    actual.forEach(element => {
      expected.forEach(element2 => {
        if (element === element2) {
          result = true;
        } else {
          return result = false;
        }
      });
    });
  }
  if (!result) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
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
const takeUntil = function(array, callback) {
  let returnArr = [];
  for (const elem of array) {
    if (!callback(elem)) {
      returnArr.push(elem);
    } else {
      break;
    }
  }
  return returnArr;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);