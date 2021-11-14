exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var re = /(\w)\1+/g;
    return str.replace(re, '$1'.repeat(amount));
  },

  wordWrap: function(str, cols) {
    var strArr = [];
    strArr = str.split(' ');
    var formatedStr = '';
    var formatedStr = strArr[0];

    for (var i = 1; i < strArr.length; i++) {
      if (strArr[i].length > cols) {
        formatedStr = formatedStr + '\n' + strArr[i];
      } else {
        if (formatedStr.length + strArr[i].length > cols) {
          formatedStr = formatedStr + '\n' + strArr[i];
        } else {
          formatedStr = formatedStr + ' ' + strArr[i];
        }
      }
    }

    return formatedStr;
  },

  reverseString: function(str) {
    var strArr = str.split('');
    return strArr.reverse().join('');
  }
};
