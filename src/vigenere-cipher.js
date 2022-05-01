const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.isDirect = direct;
    this.alphabet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.square = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                   'BCDEFGHIJKLMNOPQRSTUVWXYZA',
                   'CDEFGHIJKLMNOPQRSTUVWXYZAB',
                   'DEFGHIJKLMNOPQRSTUVWXYZABC',
                   'EFGHIJKLMNOPQRSTUVWXYZABCD',
                   'FGHIJKLMNOPQRSTUVWXYZABCDE',
                   'GHIJKLMNOPQRSTUVWXYZABCDEF',
                   'HIJKLMNOPQRSTUVWXYZABCDEFG',
                   'IJKLMNOPQRSTUVWXYZABCDEFGH',
                   'JKLMNOPQRSTUVWXYZABCDEFGHI',
                   'KLMNOPQRSTUVWXYZABCDEFGHIJ',
                   'LMNOPQRSTUVWXYZABCDEFGHIJK',
                   'MNOPQRSTUVWXYZABCDEFGHIJKL',
                   'NOPQRSTUVWXYZABCDEFGHIJKLM',
                   'OPQRSTUVWXYZABCDEFGHIJKLMN',
                   'PQRSTUVWXYZABCDEFGHIJKLMNO',
                   'QRSTUVWXYZABCDEFGHIJKLMNOP',
                   'RSTUVWXYZABCDEFGHIJKLMNOPQ',
                   'STUVWXYZABCDEFGHIJKLMNOPQR',
                   'TUVWXYZABCDEFGHIJKLMNOPQRS',
                   'UVWXYZABCDEFGHIJKLMNOPQRST',
                   'VWXYZABCDEFGHIJKLMNOPQRSTU',
                   'WXYZABCDEFGHIJKLMNOPQRSTUV',
                   'XYZABCDEFGHIJKLMNOPQRSTUVW',
                   'YZABCDEFGHIJKLMNOPQRSTUVWX',
                   'ZABCDEFGHIJKLMNOPQRSTUVWXY'];
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const messageUP = message.toUpperCase();
    const keyUP = key.toUpperCase();
    let res = '';
    for (let m = 0, k = 0; m < messageUP.length; m++, k++) {
      if (this.alphabet.indexOf(messageUP[m]) < 0) {
        res += messageUP[m];
        k--;
      } else {
        let i = this.alphabet.indexOf(messageUP[m]);
        let j = this.alphabet.indexOf(keyUP[k % keyUP.length]);
        res += this.square[i][j];
      }
    }
    if (this.isDirect) {
      return res;
    } else {
      return res.split("").reverse().join("");
    }
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const messageUP = message.toUpperCase();
    const keyUP = key.toUpperCase();
    let res = '';
    for (let m = 0, k = 0; m < messageUP.length; m++, k++) {
      if (this.alphabet.indexOf(messageUP[m]) < 0) {
        res += messageUP[m];
        k--;
      } else {
        let i = this.alphabet.indexOf(keyUP[k % keyUP.length]);
        let j = this.square[i].indexOf(messageUP[m]);
        res += this.alphabet[j];
      }
    }
    if (this.isDirect) {
      return res;
    } else {
      return res.split("").reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
