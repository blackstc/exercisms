//creating creating class constructor for SpaceAge
var SpaceAge = function (seconds) {
  this.earthYearInSeconds = 31557600;
  this.seconds = seconds;

  // seconds on each planet relative to earth
  var planets = {
    onEarth: 1,
    onMercury: 0.2408467,
    onVenus: 0.61519726,
    onMars: 1.8808158,
    onJupiter: 11.862615,
    onSaturn: 29.447498,
    onUranus: 84.016846,
    onNeptune: 164.79132
  };

  // returns a string of the a function code block to calculate earth years for each planet
  this.constructFn = function (fn) {
    return 'return +(this.seconds / (this.earthYearInSeconds * ' + planets[fn] + ')).toFixed(2);'
  }

  //for each key in the object planets run...
  for ( planetFnName in planets ) {
    // for each planet create a new function with using itself as its name and run the helper function above to calculate the years
    this[planetFnName] = new Function('', this.constructFn(planetFnName));
  }
}

module.exports = SpaceAge;
