const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
  let width = matrix[0].length;
  let height = matrix.length;
  let count = 0;
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      const element = matrix[j][i];
      if (element > 0) {
        count += element;
      } else {
        break;
      }
    }
  }
  return count;
}

module.exports = {
  getMatrixElementsSum
};
