function DnaTranscriber() {
}

DnaTranscriber.prototype.toRna = function (string) {
  var array = string.split('');
  var result = '';

  array.forEach(function(char) {
    if (char === 'C') {
      result += 'G';
    } else if (char === 'G') {
      result += 'C';
    } else if (char === 'A') {
      result += 'U';
    } else if (char === 'T') {
      result += 'A';
    }
  });
  return result;
};

DnaTranscriber.prototype.toDna= function (string) {
  var array = string.split('');
  var result = '';

  array.forEach(function(char) {
    if (char === 'C') {
      result += 'G';
    } else if (char === 'G') {
      result += 'C';
    } else if (char === 'U') {
      result += 'A';
    } else if (char === 'A') {
      result += 'T';
    }
  });
  return result;
};

module.exports = DnaTranscriber;
