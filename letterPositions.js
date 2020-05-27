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



const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

// test code
const test = letterPositions("hello");
console.log(test);
assertArraysEqual(test.e, [1]);