const countLetters = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;


// test code
// const test = countLetters('L H L');
// console.log(test);

// assertEqual(test["L"], 2);
// assertEqual(test["H"], 1);