exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var timeout;

    function counter() {
      if (start <= end) {
        console.log(start);
        timeout = setTimeout(counter, 100);
        start++;
      }
    }

    counter();

    return {
      cancel: function() {
        clearTimeout(timeout);
      }
    };
  }
};
