const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink( value = '' ) {
    this.chain.push(String(value));
    return this;
  },

  removeLink( position ) {
    if (typeof(position) !== 'number' || position < 1 || position%1 !== 0 || position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain = this.chain.slice(0, position-1).concat(this.chain.slice(position));
    return this;
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = this.chain.reduce((pv, cv) => {return pv += `( ${cv} )~~`}, '');
    this.chain = [];
    return result.slice(0, -2);
  }
};

module.exports = {
  chainMaker
};
