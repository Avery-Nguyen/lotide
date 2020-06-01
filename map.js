const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// const word2 = ["hello", "3oodbye", "t"]
// const word3 = ["one", "two", "three"]
// const results1 = map(words, word => word[0]);
// const result2 = map(word2, word => word[0]);
// const result3 = map(word3, word => word[0]);
// assertArraysEqual(results1,  ['g', 'c', 't', 'm', 't' ])
// assertArraysEqual(result2,  ["h", "3", "t"])
// assertArraysEqual(result3,  ["o", "t", "t"])