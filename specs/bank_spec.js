var assert = require('assert');
var Bank = require('../bank.js');
var Account = require('../account.js');

describe('bank', function() {

  it('should start off with no bank accounts ', function() {
    var bank = new Bank();
    assert.equal(0, bank.accounts.length);
  });

});
