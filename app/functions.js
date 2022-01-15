exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(arg) {
      return str + ', ' + arg;
    };
  },

  makeClosures: function(arr, fn) {
    var sqArr = [];

    var func = function(item) {
      return function() {
        return fn(item);
      };
    };

    for (var i = 0; i < arr.length; i++) {
      sqArr.push(func(arr[i]));
    }

    return sqArr;
  },

  partial: function(fn, str1, str2) {
    return function(arg) {
      return fn(str1, str2, arg);
    };
  },

  useArguments: function() {
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return sum;
  },

  callIt: function(fn) {
    var args = [];

    for (var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    var args = [];

    for (var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    return function() {
      for (var k = 0; k < arguments.length; k++) {
        args.push(arguments[k]);
      }

      return fn.apply(null, args);
    };
  },

  curryIt: function(fn) {
    var args = [];

    function getArgs(arr, length) {
      return function(arg) {
        arr.push(arg);

        if (length === arr.length) {
          return fn.apply(null, arr);
        }

        return getArgs(arr, length);
      };
    }

    return getArgs(args, fn.length);
  }
};
