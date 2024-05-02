const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {

  it('Adding two positive integers', () => {
      assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('Adding negative integer to a positive integer', () => {
    assert.strictEqual(calculateNumber(-2, 5), 3);
  });

  it('Adding negative integers', () => {
    assert.strictEqual(calculateNumber(-2, -5), -7);
  });

  it('Adding two positive floats', () => {
    assert.strictEqual(calculateNumber(9.9, 5.19), 15);
  });

  it('Adding negative float to a positive float', () => {
    assert.strictEqual(calculateNumber(-9.9, 5.19), -5);
  });

  it('Adding a float to an integer', () => {
    assert.strictEqual(calculateNumber(9.9, 6), 16);
  });

  it('Adding floats with significant precision loss', () => {
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
  });

  it('Adding numbers that result in rounding errors', () => {
    assert.strictEqual(calculateNumber(0.1, 0.7), 1);
  });

});
