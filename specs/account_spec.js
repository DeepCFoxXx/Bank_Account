var assert = require('assert');
var Account = require('../account.js');


describe('account', function() {

  it('should have a owner name', function() {
    var account = new Account({owner:'Kara',amount:10000, type:'personal'});
    assert.equal(account.owner, 'Kara');
  });

});
