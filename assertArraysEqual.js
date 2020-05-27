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

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false