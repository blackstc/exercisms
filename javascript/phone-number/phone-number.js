function PhoneNumber(phoneNum) {
  this.phoneNum = phoneNum;
  this.newNum = phoneNum.replace(/[-.() ]/g, '');
}

PhoneNumber.prototype.number = function () {
  var newNum = this._validNumber(this.phoneNum);
  return newNum;
};

PhoneNumber.prototype.areaCode = function () {
  var newNum = this._validNumber(this.phoneNum);
  return newNum.substring(0, 3);
};

PhoneNumber.prototype.toString = function () {
  var numArr = this.newNum.split('');
  numArr.splice(0, 0, '(');
  numArr.splice(4, 0, ') ');
  numArr.splice(8, 0, '-');
  return numArr.join('');
};

PhoneNumber.prototype._validNumber = function () {
  var errorNum = '0000000000';
  if (this.newNum.length === 11 && this.newNum[0] === '1') {
    return this.newNum.slice(1);
  } else if (this.newNum.length === 10) {
    return this.newNum;
  } else {
    return errorNum;
  }
};

module.exports = PhoneNumber;
