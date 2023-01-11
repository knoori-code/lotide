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


const middle = function (array) {
  // count how many elements that are in array
  let numOfElements = array.length;
  let newArray = []
  // For arrays with odd numbers, array with singe element should be returned
  if (numOfElements < 3) {
    newArray = []
  } else if (numOfElements % 2 !== 0) {
    newArray.push(array[(Math.floor(numOfElements / 2))])
  } else if (numOfElements % 2 === 0) {
    newArray = array.slice(((numOfElements / 2) -1), (numOfElements / 2) + 1)
  }
return newArray
}

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3]
console.log(middle([1, 2, 3, 4, 5, 6, 7]))
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2, 3]), [3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6])
