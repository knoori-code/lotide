const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetter = function (sentence) {
  // takes input of a sentence as a string
  let letterObject = {}
  // join string together so there are no spaces
  let newSentence = sentence.toLowerCase();
  // loop through sentence and add letter to variable if it's not there.  Increment letter if it is
  for (let char of newSentence) {
    // return a count of each letter in sentence
    if (!letterObject[char]) {
      letterObject[char] = 1
    } else {
      letterObject[char] += 1
    }
  }
return letterObject
}

console.log(countLetter("niccccceeeee"))