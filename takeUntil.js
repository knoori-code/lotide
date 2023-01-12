const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true
}

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🟢🟢🟢Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${array1} !== ${array2}`);
  }
}


// takeUntil take two paramters: An array to work with and the callback function

const takeUntil = function(array, callback) {
  // Return a slice of the array. Starts at beginning and goes until the callback returns a truth value
  const newArray = [];
  // Loop through array given
  for (let element of array) {
    if (!callback(element)) {
      newArray.push(element)
    } else {
      break
    }
  }
  // Need to return a truncated string
  return newArray
}




// Expected outputs
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2])
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5])

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ])
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Holl' ])