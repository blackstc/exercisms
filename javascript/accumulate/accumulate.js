function accumulate(array, cb) {
  return array.map(cb);
}

module.exports = accumulate;
