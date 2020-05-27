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

const eqObjects = function(object1, object2) {
  let result = false;
  const arr1 = Object.keys(object1);
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key of arr1) {
      if (Array.isArray(object1[key])) {
        result = eqArrays(object1[key], object2[key]);
      } else if (object1[key] === object2[key]) {
        result = true;
      } else {
        return false;
      }
    }
  }
  return result;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const abc2 = { a: "1", b: "4", c: "3" };



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false
assertObjectsEqual(ab, ba);
assertObjectsEqual(cd, dc); // => true
assertObjectsEqual(abc, abc2);