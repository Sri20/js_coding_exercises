/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  //loop through ,checks the number is multiple of 3 or 5
  let result = 0

  arr.forEach((num) => {
    if (num % 3 == 0 || num % 5 == 0) {
      result = result + num
    }
  })
  return result
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  //console.log(str)
  let strarr = str.split('')
  let valid = true
  strarr.forEach((strchar) => {
    if (!(strchar == 'T' ||
      strchar == 'A' ||
      strchar == 'C' ||
      strchar == 'G')) {
      valid = false
    }
  })
  return valid
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  let result = ''
  let strarr = str.split('')
  let valid = true
  strarr.forEach((strchar) => {
    if (!(strchar == 'T' ||
      strchar == 'A' ||
      strchar == 'C' ||
      strchar == 'G')) {
      valid = false
    }
  })
  if (valid) {
    let resultarr = strarr.map((strchar) => {
      if (strchar == 'T') {
        strchar = 'A'
      }
      else if (strchar == 'A') {
        strchar = 'T'
      }
      else if (strchar == 'C') {
        strchar = 'G'
      }
      else if (strchar == 'G') {
        strchar = 'C'
      }
      return strchar
    })
    result = resultarr.join('')
  }
  return result
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  let prime = false
  if (n != 0 && n != 1) {
    prime = true
    let i = 2
    while (prime && i <= n / 2 && n != 2) {
      if (n % i == 0) {
        prime = false
      }
      i += 1
    }
  }
  return prime
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  const arr = []

  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n).fill().map((numa) => {
      numa = fill
      return numa
    })
  }
  return arr
};


/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  if (staff.length == 0) {
    return false
  }
  let staffcount = 0
  staff.forEach((member) => {
    if (member.rota.includes(day)) {
      staffcount += 1
    }
  })
  return (staffcount >= 3)

};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
