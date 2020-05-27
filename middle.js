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

const eqArrays = function(arr1, arr2){
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
  return result;
}

const middle = function(array){
  let mid = [];
  const midIndex = Math.floor(array.length/2);
  if(array.length <= 2){
    return mid;
  }else if((array.length % 2) === 0){
    mid.push(array[midIndex -1], array[midIndex]);
  }else if((array.length % 2) !== 0){
    mid.push(array[midIndex]);
  }
  return mid;
}

assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => []
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]