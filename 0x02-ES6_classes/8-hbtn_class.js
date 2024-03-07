export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // The valueOf method to convert an object to a primitive value
  valueOf() {
    return `${this._size}`;
  }

  toString() {
    return `${this._location}`;
  }
}
