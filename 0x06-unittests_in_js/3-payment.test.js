const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

describe('calculateNumber Usage', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const sendPaymentSpy = sinon.spy(console, 'log')
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(sendPaymentSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    calculateNumberSpy.restore();
    sendPaymentSpy.restore();
  });
});
