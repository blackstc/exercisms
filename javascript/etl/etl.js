module.exports = function(obj) {
  var result = {};
  for (var key in obj) {
    var letterArr = obj[key];
    letterArr.forEach(function(letter) {
      result[letter.toLowerCase()] = +key;
    });
  }
  return result;
}
