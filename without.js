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
module.exports = without;
// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);