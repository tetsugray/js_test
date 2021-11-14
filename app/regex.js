exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var searchNumber = /\d/;
    return searchNumber.test(str);
  },

  containsRepeatingLetter: function(str) {
    var searchDouble = /([A-Za-z])\1/;
    return searchDouble.test(str) === true;
  },

  endsWithVowel: function(str) {
    var endVowel = /[aeiou]$/i;
    return endVowel.test(str);
  },

  captureThreeNumbers: function(str) {
    var firstThree = /\d{3}/;
    if (firstThree.exec(str) === null) {
      return false;
    } else {
      return firstThree.exec(str).join('');
    }
  },

  matchesPattern: function(str) {
    var pattern = /^\d{3}-\d{3}-\d{4}$/;
    return pattern.test(str);
  },

  isUSD: function(str) {
    var rightUSD = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
    return rightUSD.test(str);
  }
};
