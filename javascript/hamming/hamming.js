function compute(str1, str2) {
  var count = 0;

  for (var i = 0; i < str1.length; i++) {
    if (str1.length !== str2.length) {
      throw 'DNA strands must be of equal length.';
    } else if (str1[i] !== str2[i]) {
      count++;
    }
  }
  return count;
}

module.exports = compute;
