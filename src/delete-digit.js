const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = [];
  for (let index = 0; index < String(n).length; index++) {
    const element = String(n)[index];
    numbers.push(+String(n).replace(element, ''));
  }
  return numbers.sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit
};
