const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

describe('calculateNumber Usage', () => {
  let sendPaymentSpy;

  beforeEach(() => {
    sendPaymentSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    sendPaymentSpy.restore();
  });

  it('calling sendPaymentRequestToApi with 100 and 20 should console log 120', () => {
    sendPaymentRequestToApi(100, 20);
    expect(sendPaymentSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('calling sendPaymentRequestToApi with 10 and 10 should console log 20', () => {
    sendPaymentRequestToApi(10, 10);
    expect(sendPaymentSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });

});
