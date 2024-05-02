const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');


describe('Async testing', () => {
  it('getPaymentTokenFromAPI with true as argument', (done) => {
    // By passing done as an arg we identify that this is a an async test
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({
          data: 'Successful response from the API' 
        });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});

