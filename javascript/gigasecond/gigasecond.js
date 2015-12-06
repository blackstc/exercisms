(function() {
  'use strict';

  function Gigasecond(date) {
    this.dateObj = date;
  }
  Gigasecond.prototype.date = function () {
    var days = this.dateObj.getTime() / 1000;
    var gigaseconds = 1000000000;
    var gigbirthday = seconds + gigaseconds
    return seconds;
  };

  module.exports = Gigasecond;
  var gs = new Gigasecond(new Date(1989, 11, 10));
  console.log(gs.date());
})();
