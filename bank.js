var Bank = function() {
  this.accounts = [];
};

Bank.prototype.addAccount = function(account) {
  this.accounts.push(account);
}

Bank.prototype.findAccountByOwnerName = function(ownerName) {
  var foundAccount = null;
  for (account of this.accounts) {
    if(account.owner === ownerName){
      foundAccount = account;
    }
  }
  return foundAccount;
}

module.exports = Bank;
