# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @averyvn/lotide`

**Require it:**

`const _ = require('@averyvn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: takes in a string and returns the number of times each letter in that string appears.
* `countOnly(array, object)`: given an array and an object. It will return an object containing counts of everything that the input object listed.
* `eqArray(arr1, arr2)`: takes in two arrays, returns true if they are the same. False otherwise.
* `eqObject(obj1, obj2)`: takes in two objects, returns true if they are the same. False otherwise.
* `findKey(object, function)`: takes in an object and a function. Return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(object, string)`: Takes in an object and a value. Returns the first key which contains the given value. If no key with that given value is found, then returns undefined.
* `flatten(array)`: Takes in a nested array and returns a new array single-level array. (does not handle multi-level arrays)
* `head(array)`: takes in an array, returns the "head" of an array.
* `letterPositions(string)`: takes in a string  and return all the indices (zero-based positions) in the string where each character is found.
* `map(array, function)`: takes in an array and a function. Returns new array based off of the results of the function.
* `middle(array)`: takes an array and returns the middle(s) elements(s).
* `tail(array)`: takes in an array, returns the "tail" of an array.
* `takeUntil(array, function)`: Takes in an array and function. Return a new array starting from the begining of the original array until function returns truthy.
* `Without(arr1, arr2)`: takes one array and other array of elements to remove. Returns new array.

