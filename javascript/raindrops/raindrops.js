(function() {
  'use strict';

  function RainDrops() {
    this.numMap = {
      3: 'Pling',
      5: 'Plang',
      7: 'Plong'
    };
  }

  RainDrops.prototype.convert = function (num) {
    if (!this._isDivisible(num)) {
      return num.toString();
    }

    var results = '';

    for (var primeNum in this.numMap) {
      if (num % primeNum === 0) {
        results += this.numMap[primeNum];
      }
    }
    return results;
  };

  RainDrops.prototype._isDivisible = function (num) {
    for (var primeNum in this.numMap) {
      if (num % primeNum === 0) {
        return true;
      }
    }
    return false;
  };

  module.exports = RainDrops;

})();
