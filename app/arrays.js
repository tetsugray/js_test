exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((sum, current) => sum + current, 0 );
  },

  remove: function(arr, item) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        arr.length--;
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    return newArr;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    var duplicates = [];
    var sortArr = arr.sort();

    for (var i = 0; i < sortArr.length; i++) {
      if (sortArr[i + 1] === sortArr[i]) {
        if (duplicates.includes(sortArr[i]) === false) {
          duplicates.push(sortArr[i]);
        }
      }
    }
    return duplicates;
  },

  square: function(arr) {
    var squared = [];

    for (var i = 0; i < arr.length; i++) {
      squared.push(arr[i] * arr[i]);
    }
    return squared;
  },

  findAllOccurrences: function(arr, target) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        result.push(i);
      }
    }

    return result;
  }
};
