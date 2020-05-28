const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

const assertArraysEqual = function(actual, expected){
  let result = true
  if(result){
    actual.forEach(element => {
      expected.forEach(element2 => {
        if(element === element2){
          result = true;
        } else {
          return result = false;
        }
      })
    });
  }
  if(!result){
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }else{
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
}


const words = ["ground", "control", "to", "major", "tom"];
const word2 = ["hello", "3oodbye", "t"]
const word3 = ["one", "two", "three"]
const results1 = map(words, word => word[0]);
const result2 = map(word2, word => word[0]);
const result3 = map(word3, word => word[0]);
assertArraysEqual(results1,  ['g', 'c', 't', 'm', 't' ])
assertArraysEqual(result2,  ["h", "3", "t"])
assertArraysEqual(result3,  ["o", "t", "t"])