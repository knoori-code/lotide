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

module.exports = middle;