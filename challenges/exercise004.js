function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((num) => (num < 1))
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter((item) => (item[0] == char))
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter((word) => (word.substr(0, 3) == 'to '))
}


function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((item) => Number.isInteger(item))
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let result = []
  users.forEach((item) => {
    if (item.data.city.displayName) {
      result.push(item.data.city.displayName)
    }
  })
  return result

}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map((item) => parseFloat((Math.sqrt(item)).toFixed(2)))
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let result = []
  sentences.forEach((item) => {
    if (item.toLowerCase().includes(str.toLowerCase())) {
      result.push(item)
    }
  })
  return result
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let result = []
  triangles.forEach((singletri) => {
    let longside = 0
    singletri.forEach((side) => {
      if (side > longside)
        longside = side
    })
    result.push(longside)
  })
  return result
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
