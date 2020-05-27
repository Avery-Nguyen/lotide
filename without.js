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
      });
    });
  }
  if(!result){
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }else{
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
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
      });
    });
  }
  return result;
}
const exists = function(value, array){
  for (let i = 0; i < array.length; i++) {
    if(array[i] === value){
      return true;
    }
  }
  return false
}

const without = function(source, itemsToRemove){
  let newArr = [];
  source.forEach(element => {
    if(!exists(element, itemsToRemove)){
    newArr.push(element)
    }
  });
  console.log(newArr);
  return newArr;
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);