function verse(num) {
  var firstVerse = num + " bottles of beer on the wall, ";
  var secondVerse = num + " bottles of beer.\nTake one down and pass it around, " + (num - 1);

  if (num > 2) {
    return (firstVerse + secondVerse +  " bottles of beer on the wall.\n");
  } else if (num === 2) {
    return (firstVerse + secondVerse + " bottle of beer on the wall.\n");
  } else if (num === 1) {
    return (num + " bottle of beer on the wall, " + num + " bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n");
  } else if (num === 0) {
    return ('No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n')
  }
}

function sing(startNum, endNum) {
  var range = startNum - endNum;
  var song = '';

  if (endNum === undefined) {
    while (startNum !== 0) {
      song.concat(verse(startNum));
      startNum--;
    }
  } else {
    for (var i = 0; i <= range; i++) {
      song += verse(startNum)
      startNum--;
    }
  }
  return song;
}

module.exports = {
  verse: verse,
  sing: sing,
}
