export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number' || length < 0) {
      throw new TypeError('Length must be a number');
    }

    if (!Array.isArray(students) || students.some((element) => typeof element !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // name getter
  get name() {
    return this._name;
  }

  // name setter
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // length getter
  get length() {
    return this._length;
  }

  // length setter
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }
  }

  // students getter
  get students() {
    return this._students;
  }

  // students setter
  set students(students) {
    if (!Array.isArray(students) || students.some((element) => typeof element !== 'string')) {
      throw new TypeError('Students must be an array of Strings');
    } else {
      this._students = students;
    }
  }
}
