const findKeyByValue = function(object, property) {
  const arrKeys = Object.keys(object);
  for (const key of arrKeys) {
    if (object[key] === property) {
      return key;
    } 
  }
};
module.exports = findKeyByValue;


// const bestTVShowsByGenre = {
  // sci_fi: "The Expanse",
  // comedy: "Brooklyn Nine-Nine",
  // drama:  "The Wire"
// };
// 
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);