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

Bank.prototype.totalCash = function(type) {
  var total = 0;
  for (account of this.filteredAccounts(type)) {
    total += account.amount;
  }
  return total;
}

Bank.prototype.filteredAccounts = function(type) {
  if(!type) return this.accounts;
  var filteredAccounts = [];
  for (account of this.accounts) {
    if(type === account.type)
    filteredAccounts.push(account);
  }
  return filteredAccounts;
}

Bank.prototype.accountAverage = function() {
  return this.totalCash()/this.accounts.length;
}

Bank.prototype.largestAccount = function(){
  let largest = this.accounts[0];
  for (var account of this.accounts) {
    if (account.amount > largest) {
      largest = account;
    }
  }
  return largest;
}

module.exports = Bank;
