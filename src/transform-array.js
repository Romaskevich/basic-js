const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const comand = ['--discard-prev', '--discard-next', '--double-prev', '--double-next'];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length === 0) {
    return arr;
  }
  if (arr.some(el => comand.includes(el))) {

    let newArr = [];
    arr.forEach((element,index) => {
      if (isNaN(element)) {
        if (element === '--discard-prev' && index !== 0 && arr[index-2] !== '--discard-next') {
          newArr.pop();
        }
        if (element === '--double-next' && index !== (arr.length - 1)) {
          newArr.push(arr[index+1]);
        }
        if (element === '--double-prev' && index !== 0 && arr[index-2] !== '--discard-next') {
          newArr.push(arr[index-1]);
        }
      } else if (arr[index-1] !== '--discard-next') {
        newArr.push(element);
      }
    });
    return newArr;
  } else { let newArr = [];
    arr.forEach(element => {
      
      
        newArr.push(element);
      
      
    });
    return newArr;
  }
    
}

module.exports = {
  transform
};
