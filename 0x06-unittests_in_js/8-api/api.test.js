const { expect } = require('chai');
const { response } = require('express');
const request = require('request');

const URL = 'http://localhost:7865';

describe('API Testing', () => {
  it('request to the index page of the server', (done) => {
    request(URL, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
