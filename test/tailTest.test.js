const assert = require('chai').assert
const tail = require("../tail")

describe("Tail function", () => {

  it("Returns [2, 3, 5, 6] for [1, 2, 3, 5, 6]", () => {
      assert.deepEqual(tail([1, 2, 3, 5, 6]), [2, 3, 5, 6])
  })

  it("Returns[3,6,7,8,] for [1,3,6,7,8,]", () => {
    assert.deepEqual(tail([1,3,6,7,8,]), [3,6,7,8,])
  })

  it("Returns [\"Lighthouse\", \"Labs\"] for [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  })

})