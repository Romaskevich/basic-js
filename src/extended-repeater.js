const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  str=String(str);
  if (options.addition || options.addition === null) { options.addition=String(options.addition) };
let add = Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator ? options.additionSeparator : '|');
  return Array(options.repeatTimes).fill(str+add).join(options.separator ? options.separator : '+');
}

module.exports = {
  repeater
};


// Array(5).fill('aaa').join('+');