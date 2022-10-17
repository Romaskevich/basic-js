const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains.reduce((pv, cv) => {
    let cvArr = cv.split('.');
    let res = '';
    for (let i = cvArr.length - 1; i >= 0; i--) {
      res += `.${cvArr[i]}`;
      if (pv[res] === undefined) {
        pv[res] = 1;
      } else {
        pv[res] += 1;
      }
    }
    return pv;
  }, {});
}

module.exports = {
  getDNSStats
};
