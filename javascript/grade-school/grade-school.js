function School() {
  this.students = {};
}

School.prototype.roster = function () {
  return this.students;
};

School.prototype.add = function (name, grade) {
  if (this.students[grade] === undefined) {
    this.students[grade] = [name];
  } else {
    this.students[grade].push(name);
    this.students[grade].sort();
  }
};

School.prototype.grade = function (gradeNum) {
  if (this.students[gradeNum]) {
    return this.students[gradeNum].sort();
  } else {
    return [];
  }
};
module.exports = School;
