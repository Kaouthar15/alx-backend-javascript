const { expect } = require('chai');
const { response, json } = require('express');
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

  it('request to the /cart/:id page of the server with valid id number type', (done) => {
    request(URL + '/cart/30', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 30');
      done();
    });
  });

  it('request to the /cart/:id page of the server with invalid id type', (done) => {
    request(URL + '/cart/thirty', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('request to the /available_payments page of the server that returns json data', (done) => {
    request(URL + '/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      const jsonData = JSON.parse(body);
      expect(jsonData).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });

  it('Post request to the /login page of the server with username in the form', (done) => {
    request.post({
      url: URL + '/login',
      form: {
        userName: "Adel"
      }
      }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.deep.equal('Welcome Adel');
      done();
    });
  });
});
