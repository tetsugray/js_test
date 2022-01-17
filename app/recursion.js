exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var fileList = [];
    var dirs = [];

    function processDir(dir) {
      var file;
      var files = dir.files;

      dirs.push(dir.dir);

      for (var i = 0; i < files.length; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            fileList.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }

      dirs.pop();
    }

    processDir(data);
    return fileList;
  },

  permute: function(arr) {
    var temp = [];
    var answer = [];

    function logResult() {
      answer.push(temp.slice());
    }

    function doing() {
      var item;

      for (var i = 0; i < arr.length; i++) {
        item = arr.splice(i, 1)[0];
        temp.push(item);

        if (arr.length) {
          doing();
        } else {
          logResult();
        }

        arr.splice(i, 0, item);
        temp.pop();
      }

      return answer;
    }

    return doing();
  },

  fibonacci: function(n) {
    if (n <= 1) {
      return n;
    }

    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  },

  validParentheses: function(n) {
    var result = [];
    setCombinations(0, 0, '');
    function setCombinations(left, right, combination) {
      if (combination.length == n * 2) {
        result[result.length] = combination;
        return;
      }
      if (left < n) 
        setCombinations(left + 1, right, `${combination}(`);
      if (right < left)
        setCombinations(left, right + 1, `${combination})`);
    }
    return result;
  }
};
