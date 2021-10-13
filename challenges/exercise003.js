function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let result = []
  if (nums.length != 0) {
    for (let i = 0; i < nums.length; i++) {
      result.push(nums[i] * nums[i])
    }
  }
  return result
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let result = words[0]
  for (let i = 1; i < words.length; i++) {
    let temp = words[i]
    for (let j = 0; j < temp.length; j++) {
      if (j == 0) {
        let tempC = temp[j].toUpperCase()
        result = result + tempC
      }
      else {
        result = result + temp[j]
      }
    }
  }
  return (result)
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count = 0
  for (let i = 0; i < people.length; i++) {
    if ((people[i].subjects).length != 0) {
      count = count + people[i].subjects.length
    }
  }
  return count
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let i = 0; i < menu.length; i++) {
    for (let j = 0; j < menu[i].ingredients.length; j++) {
      if (menu[i].ingredients[j] == ingredient) {
        return true
      }
    }
  }
  return false
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let result = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let tempa = arr2[j]
      let change = 1
      if (arr1[i] == arr2[j]) {

        for (let k = 0; k < result.length; k++) {
          if (result[k] == tempa) {
            change = 0
          }
          if (result[k] != tempa && result[k] > tempa) {
            // sort ascending while adding to result
            let tempb = tempa
            tempa = result[k]
            result[k] = tempb
          }
        }
        if (change == 1) {
          result.push(tempa)
        }
      }
    }

  }
  return result
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
