import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
    this._amount = amount;
    this._currency = currency;
  }

  // amount getter
  get amount() {
    return this._amount;
  }

  // amount setter
  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // currency getter
  get currency() {
    return this._currency;
  }

  // currency setter
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    } else {
      this._currency = currency;
    }
  }

  displayFullPrice() {
    const currency1 = this.currency;
    return `${this.amount} ${currency1._name} (${currency1._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion Rate must be a number');
    }
    return amount * conversionRate;
  }
}
