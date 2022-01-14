exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    // eslint-disable-next-line no-undef
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(value);
      });
    });
  },

  manipulateRemoteData: function(url) {
    return fetch(url)
    .then(resp => resp.json())
    .then(data => {
        var newPeople = [];
        for (var i = 0; i < data.people.length; i++) {
          newPeople[i] = data.people[i].name;
        }
        return newPeople.sort();
      });
  }
};
