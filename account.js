module.exports = function() {
  var output = {}
  var customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: '1'
  }

  function setAccountType () {
    if (customerAccount.checking == 1) {
      // debugger;
      customerAccount.type = 'checking'
    } else {
      customerAccount.type = 'savings'
    }
  }
  // debugger;

  var signupBonus = 250,
   deposit = 1000

  var openAccount = function(account, deposit) {
    account.balance += signupBonus
    debugger
    output['New balance after signup bonus is '] = account.balance
    account.balance += deposit
  }

  output['Account before opening'] = customerAccount

  openAccount(customerAccount, deposit)
  setAccountType()
  // debugger;
  output['Account after opening'] = customerAccount
  return output
}