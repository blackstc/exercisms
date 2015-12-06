//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (!input || !input.trim()) {
    return 'Fine. Be that way!';
  } else if (input.toUpperCase() === input && input.toLowerCase() !== input) {
    return 'Whoa, chill out!';
  } else if (input.lastIndexOf('?') === input.length - 1) {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }
};

module.exports = Bob;
