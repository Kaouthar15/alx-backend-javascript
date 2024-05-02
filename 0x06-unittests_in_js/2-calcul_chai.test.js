const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai')

describe('calculateNumber', () => {
  describe('calculate SUM', () => {
    it('Adding two positive integers', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('Adding negative integer to a positive integer', () => {
      expect(calculateNumber('SUM', -2, 5)).to.equal(3);
    });

    it('Adding negative integers', () => {
      expect(calculateNumber('SUM', -2, -5)).to.equal(-7);
    });

    it('Adding two positive floats', () => {
      expect(calculateNumber('SUM', 9.9, 5.19)).to.equal(15);
    });

    it('Adding negative float to a positive float', () => {
      expect(calculateNumber('SUM', -9.9, 5.19)).to.equal(-5);
    });

    it('Adding a float to an integer', () => {
      expect(calculateNumber('SUM', 9.9, 6)).to.equal(16);
    });

    it('Adding floats with significant precision loss', () => {
      expect(calculateNumber('SUM', 0.1, 0.2)).to.equal(0);
    });

    it('Adding numbers that result in rounding errors', () => {
      expect(calculateNumber('SUM', 0.1, 0.7)).to.equal(1);
    });
  });

  describe('calculate Subtraction', () => {
    it('Subtracting two positive integers', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    it('Subtracting negative integer to a positive integer', () => {
      expect(calculateNumber('SUBTRACT', -2, 5)).to.equal(-7);
    });

    it('Subtracting negative integers', () => {
      expect(calculateNumber('SUBTRACT', -2, -5)).to.equal(3);
    });

    it('Subtracting two positive floats', () => {
      expect(calculateNumber('SUBTRACT', 9.9, 5.19)).to.equal(5);
    });

    it('Subtracting negative float to a positive float', () => {
      expect(calculateNumber('SUBTRACT', -9.9, 5.19)).to.equal(-15);
    });

    it('Subtracting a float to an integer', () => {
      expect(calculateNumber('SUBTRACT', 9.9, 6)).to.equal(4);
    });

    it('Subtracting floats with significant precision loss', () => {
      expect(calculateNumber('SUBTRACT', 0.1, 0.2)).to.equal(0);
    });

    it('Subtracting numbers that result in rounding errors', () => {
      expect(calculateNumber('SUBTRACT', 0.1, 0.7)).to.equal(-1);
    });
  });

  describe('calculate Division', () => {
    it('Division with two positive integers', () => {
      expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
    });

    it('Dividing a negative integer by a positive integer', () => {
      expect(calculateNumber('DIVIDE', -10, 5)).to.equal(-2);
    });

    it('Division with two negative integers', () => {
      expect(calculateNumber('DIVIDE', -15, -5)).to.equal(3);
    });

    it('Division with two positive floats', () => {
      expect(calculateNumber('DIVIDE', 9.9, 5.19)).to.equal(2);
    });

    it('Dividing a negative float by a positive float', () => {
      expect(calculateNumber('DIVIDE', -9.9, 5.19)).to.equal(-2);
    });

    it('Dividing a float by an integer', () => {
      expect(calculateNumber('DIVIDE', 34.6, 5)).to.equal(7);
    });
  
    it('Dividing a number by zero', () => {
      expect(calculateNumber('DIVIDE', 10, 0.3)).to.equal('Error');
    });
  });

});
