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

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }

  for (let key in object1) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false
      } 
    } else {

      if (object1[key] !== object2[key]) {
        return false
      }
    }

  }
  return true
}

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject))

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject))

// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true)
// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false)

module.exports = eqObjects;
