function Robot() {
  this.name = this._randomName();
}

Robot.prototype._randomName = function () {
  var letters = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2).toUpperCase();
  var numbers = Math.random().toString(36).replace(/[^0-9]+/g, '').substr(0, 3);

  return letters + numbers;
};

module.exports = Robot;
