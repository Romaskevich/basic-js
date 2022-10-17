const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let count = 1;
  let result = arr.reduce((pv, cv, index, array) => {
    if (cv === array[index+1]) {
      count += 1;
    } else  if (count === 1) {
      pv += cv;
    } else {
      pv += count + cv;
      count = 1;
    }
    return pv;
  }, '');
  return result;
}

module.exports = {
  encodeLine
};
