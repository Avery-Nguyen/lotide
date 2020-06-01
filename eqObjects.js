const eqArrays = require('./eqArrays');
const eqObjects = function(object1, object2) {
  let result = false
  const arr1 = Object.keys(object1);
  if(Object.keys(object1).length === Object.keys(object2).length){
    for(const key of arr1){
      if(Array.isArray(object1[key])){
        result = eqArrays(object1[key], object2[key]);
      } else if(object1[key] === object2[key]){
        result = true;
      } else {
        return false;
      }
    }
  } 
  return result;
};

module.exports = eqObjects;

// //test code
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// const abc2 = { a: "1", b: "4", c: "3" };
// // 
// // 
// // assertEqual(eqObjects(ab, ba), true)
// // assertEqual(eqObjects(abc, abc2), false)
// // 
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// // assertEqual(eqObjects(cd, dc), true); // => true
// // 
// const cd2 = { c: "1", d: ["2", 3, 4] };
// // assertEqual(eqObjects(cd, cd2), false); // => false
// const r1 = eqObjects(ab, ba) // true
// const r2 = eqObjects(abc, abc2) //false
// const r3 = eqObjects(cd, dc) //true
// const r4 = eqObjects(cd, cd2) // false
// console.log(r1, r2, r3, r4);
