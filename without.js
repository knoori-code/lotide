const eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false
      }
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


// Function which removes elements of itemsToRemove from the source array
const without = function (source, itemsToRemove) {
  // Loop through source array
  let newArray = source;
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (newArray[i] === itemsToRemove[j]) {
        newArray.splice(i, 1);
        i -= 1
      }
    }
  }
  return newArray
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without(["1", "2", "3"], [1, "2", "3"])) // => [1]
console.log(without([1, 2, 3, 4, 5], [1, 2, 3])) // => [4, 5]