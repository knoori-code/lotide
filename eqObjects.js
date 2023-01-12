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

// Do again but this time use for of loop using first array.  
// Check if object1[key] === object2[key] for entire array.  If nothing tripped, both arrays are equal. 
const eqObjects = function (object1, object2) {
  let arrayObject1 = Object.keys(object1);   // Gives array of keys for both objects
  let arrayObject2 = Object.keys(object2);

  if (arrayObject1.length !== arrayObject2.length) {
    return false
  }

  for (let key in object1) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]))
        return false
    }
    if (object1[key] !== object2[key]) {
      return false
    }
  }
  return true
}

// const shirtObjects = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// const golfShirt = { size: "small", color: "blue", sleeveLength: "short" };

// console.log(eqObjects(shirtObjects, anotherShirtObject));

// assertEqual(eqObjects(shirtObjects, anotherShirtObject), true)
// assertEqual(eqObjects(anotherShirtObject, golfShirt), true)
// assertEqual(eqObjects(shirtObjects, longSleeveShirtObject), false)
// assertEqual(eqObjects(golfShirt, longSleeveShirtObject), false)
// assertEqual(eqObjects(golfShirt, golfShirt), true)
// assertEqual(eqObjects(golfShirt, golfShirt), false)


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false