var assert = require('assert');
var Bank = require('../bank.js');
var Account = require('../account.js');

describe('bank', function() {

  it('should start off with no bank accounts ', function() {
    var bank = new Bank();
    assert.equal(0, bank.accounts.length);
  });

  it('should be able to add account', function() {
    var bank = new Bank();
    var account = new Account({owner:'Kara',amount:10000, type:'personal'});
    bank.addAccount(account);
    assert.deepEqual(account, bank.accounts[0]);
  });

  it('find account by owner name', function() {
    var bank = new Bank();
    var account = new Account({owner:'Kara',amount:10000, type:'personal'});
    bank.addAccount(account);
    var foundAccount = bank.findAccountByOwnerName('Kara');
    assert.deepEqual(account, foundAccount);
  });

  it('should find the total account value', function() {
    var bank = new Bank();
    var account1 = new Account({owner:'Kara',amount:10000, type:'personal'});
    var account2 = new Account({owner:'Jason',amount:500, type:'buisness'});
    bank.addAccount(account1);
    bank.addAccount(account2);
    assert.equal(10500, bank.totalCash());
  });

  it('should find the average value', function() {
    var bank = new Bank();
    var account1 = new Account({owner:'Kara',amount:150, type:'personal'});
    var account2 = new Account({owner:'Jason',amount:50, type:'buisness'});
    bank.addAccount(account1);
    bank.addAccount(account2);
    assert.equal(100, bank.accountAverage());
  });

});
