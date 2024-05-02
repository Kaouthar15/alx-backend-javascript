const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

describe('calculateNumber Usage', () => {
  it('should call Utils.calculateNumber with correct arguments and return 10', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    const sendPaymentSpy = sinon.spy(console, 'log')

    calculateNumberStub.returns(10);

    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(sendPaymentSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    calculateNumberStub.restore();
    sendPaymentSpy.restore();
  });
});
