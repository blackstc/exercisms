function words(string) {
  var str = string.replace('\n', ' ');
  str = str.replace('\t', ' ');
  str = str.replace('  ', ' ');
  var arr = str.trim().split(' ');

  var result = {};

  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    if (result[arr[i]]) {
      result[arr[i]] += 1;
    } else {
      result[arr[i]] = 1;
    }
  }
  return result;
}

module.exports = words;
