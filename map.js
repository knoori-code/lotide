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



const words = ["ground", "control", "to", "major", "tom"];
const words2 = ['Jordan', 'Scottie', 'Phil', 'Kerr', 'Rodman']


const map = function (array, callback) {
// Take in an array to map
// Take in a callback function
// create empty array to store wanted values
  const results =[];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

// const results = map(words, (word) => word[0]);
// console.log(results);

// assertArraysEqual(map(words, (word) => word[0]), ['g', 'c', 't', 'm', 't'])
// assertArraysEqual(map(words, (word) => word[0]), ['g', 'm', 't'])
// assertArraysEqual(map(words, (word) => word[0]), ['g', 'm'])
// assertArraysEqual(map(words2, (word) => word[0]), ['J', 'S', 'P', 'K', 'R'])
// assertArraysEqual(map(words2, (word) => word[0]), ['J', 'S', 'P', 'K', 'R', 'O', 'T'])

module.exports = map;


