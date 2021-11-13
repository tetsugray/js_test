exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & num >> bit - 1;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var strArr = [];
    for (var i = 7; i > -1; i--) {
      strArr.push(num & 1 << i ? 1 : 0);
    }
    return strArr.join('');
  },

  multiply: function(a, b) {
    var multiplier = 1e5;
    var equal = (a * multiplier) * (b * multiplier) / (multiplier * multiplier);
    return equal;
  }
};
