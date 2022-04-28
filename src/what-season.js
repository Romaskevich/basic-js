const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (date.hasOwnProperty('toString') || isNaN(Date.parse(date))) {
    let a = new Error('Invalid date!');
    throw a;
  }
  const season = ['winter', 'spring', 'summer', 'autumn'];
  let month = date.getMonth();
  if (month < 2 || month === 11) {
    return season[0];
  }
  if (month > 1 && month < 5) {
    return season[1];
  }
  if (month > 4 && month < 8) {
    return season[2];
  }
  if (month > 7 && month < 11) {
    return season[3];
  }
}

module.exports = {
  getSeason
};
