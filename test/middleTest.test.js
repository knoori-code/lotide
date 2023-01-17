const assert = require('chai').assert
const middle = require("../middle");

describe("Middle Function", () => {

  it("Returns [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  })

  it("Returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), [])
  })

  it("Returns [] for [1]", () => {
    assert.deepEqual(middle([1]), [])
  })

  it("Returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  })

  it("Returns [5,6] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5,6])
  })

})




// const assertArraysEqual = require("../assertArraysEqual")

// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2])) // => []
// console.log(middle([1])) // => []
// console.log(middle([1, 2, 3, 4, 5])) // => [3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
// console.log(middle([1, 2, 3, 4, 5, 6, 7]))
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
// assertArraysEqual(middle([1, 2, 3]), [3])
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6])