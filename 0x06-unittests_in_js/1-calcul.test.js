const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('calculate SUM', () => {
    it('Adding two positive integers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('Adding negative integer to a positive integer', () => {
      assert.strictEqual(calculateNumber('SUM', -2, 5), 3);
    });

    it('Adding negative integers', () => {
      assert.strictEqual(calculateNumber('SUM', -2, -5), -7);
    });

    it('Adding two positive floats', () => {
      assert.strictEqual(calculateNumber('SUM', 9.9, 5.19), 15);
    });

    it('Adding negative float to a positive float', () => {
      assert.strictEqual(calculateNumber('SUM', -9.9, 5.19), -5);
    });

    it('Adding a float to an integer', () => {
      assert.strictEqual(calculateNumber('SUM', 9.9, 6), 16);
    });

    it('Adding floats with significant precision loss', () => {
      assert.strictEqual(calculateNumber('SUM', 0.1, 0.2), 0);
    });

    it('Adding numbers that result in rounding errors', () => {
      assert.strictEqual(calculateNumber('SUM', 0.1, 0.7), 1);
    });
  });

  describe('calculate Subtraction', () => {
    it('Subtracting two positive integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });

    it('Subtracting negative integer to a positive integer', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2, 5), -7);
    });

    it('Subtracting negative integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2, -5), 3);
    });

    it('Subtracting two positive floats', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 9.9, 5.19), 5);
    });

    it('Subtracting negative float to a positive float', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -9.9, 5.19), -15);
    });

    it('Subtracting a float to an integer', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 9.9, 6), 4);
    });

    it('Subtracting floats with significant precision loss', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.1, 0.2), 0);
    });

    it('Subtracting numbers that result in rounding errors', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.1, 0.7), -1);
    });
  });

  describe('calculate Division', () => {
    it('Division with two positive integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2);
    });

    it('Dividing a negative integer by a positive integer', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -10, 5), -2);
    });

    it('Division with two negative integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -15, -5), 3);
    });

    it('Division with two positive floats', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 9.9, 5.19), 2);
    });

    it('Dividing a negative float by a positive float', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -9.9, 5.19), -2);
    });

    it('Dividing a float by an integer', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 34.6, 5), 7);
    });
  
    it('Dividing a number by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 0.3), 'Error');
    });
  });

});