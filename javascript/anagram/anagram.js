module.exports = function(string) {
  var results = [];
  var checkStr = string.toLowerCase().split('').sort().join('');

  return {
    matches: function(array) {
      if (typeof array === 'object') {
        for (var i = 0; i < array.length; i++) {
          var currStr = array[i].toLowerCase().split('').sort().join('');
          if (checkStr === currStr && string.toLowerCase() !== array[i].toLowerCase()) {
            results.push(array[i]);
          }
        }

      } else {
        for (var k = 0; k < arguments.length; k++) {
          var currStr = arguments[k].toLowerCase().split('').sort().join('');
          if (checkStr === currStr && string.toLowerCase() !== arguments[k].toLowerCase()) {
            results.push(arguments[k]);
          }
        }
      }
      return results;
    }
  };
};
