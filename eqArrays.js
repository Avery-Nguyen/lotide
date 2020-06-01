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
module.exports = eqArrays;

//test code
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); //true
