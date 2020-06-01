const findKey = function(object, callback){
  const arrKeys = Object.keys(object);
  for(const name of arrKeys){
    if(callback(object[name])){
      return name;
    }
  }
}
module.exports = findKey;

// const result = findKey({
  // "Blue Hill": { stars: 1 },
  // "Akaleri":   { stars: 3 },
  // "noma":      { stars: 2 },
  // "elBulli":   { stars: 3 },
  // "Ora":       { stars: 2 },
  // "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"
// 
// const result1 = findKey({
  // "Blue Hill": { stars: 1 },
  // "Akaleri":   { stars: 3 },
  // "noma":      { stars: 2 },
  // "elBulli":   { stars: 3 },
  // "Ora":       { stars: 2 },
  // "Akelarre":  { stars: 3 }
// }, x => x.stars === 1)
// 
// const result2 = findKey({
  // "Blue Hill": { stars: 1 },
  // "Akaleri":   { stars: 3 },
  // "noma":      { stars: 2 },
  // "elBulli":   { stars: 3 },
  // "Ora":       { stars: 2 },
  // "Akelarre":  { stars: 3 }
// }, x => x.stars === 5)
// 
// console.log(result);
// 
// assertEqual(result, "noma")
// assertEqual(result1, "Blue Hill")
// assertEqual(result2, undefined)
// 
// 