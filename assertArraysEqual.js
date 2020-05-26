const assertArraysEqual = function(arr1, arr2){
  let result = true
  if(result){
    arr1.forEach(element => {
      arr2.forEach(element2 => {
        if(element === element2){
          result = true;
        } else {
          return result = false;
        }
      })
    });
  }
  if(!result){
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }else{
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false