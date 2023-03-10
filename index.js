const head = require('./head')
const tail = require('./tail')
const middle = require('./middle')
const assertArraysEqual = require('./assertArraysEqual')
const assertEqual = require('./assertEqual')
const assertObjectsEqual = require('./assertObjectsEqual')
const countLetter = require('./countLetter')
const countOnly = require('./countOnly')
const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')
const findKey = require('./findKey')
const findKeyByValue = require('./findKeyByValue')
const letterPositions = require('./letterPositions')
const map = require('./map')
const takeUntil = require('./takeUntil')
const without = require('./without')


module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual, 
  assertObjectsEqual, 
  countLetter,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without
}




// module.exports = {
//   head: head,
//   tail: tail,
//   middle: middle,
//   assertArraysEqual: assertArraysEqual,
//   assertEqual: assertEqual, 
//   assertObjectsEqual: assertObjectsEqual, 
//   countLetter: countLetter,
//   countOnly: countOnly,
//   eqArrays: eqArrays,
//   eqObjects: eqObjects,
//   findKey: findKey,
//   findKeyByValue: findKeyByValue,
//   letterPositions: letterPositions,
//   map: map,
//   takeUntil: takeUntil,
//   without: without
// }