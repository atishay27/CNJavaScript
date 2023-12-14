function main() {
  //create your class here with the name Account with all the private properties and getter and setter
  class Account {
    #balance;
    constructor(accountNumber) {
      this.accountNumber = accountNumber;
      this.#balance = 0;
    }
    get getbalance() {
      return this.#balance;
    }
    set getbalance(newBalance) {
      if (newBalance < 0) {
        console.log("Please enter a positive value for the balance");
      } else {
        this.#balance = newBalance;
      }
    }
    deposit(amount) {
      this.getbalance = this.#balance + amount;
    }
    withdraw(amount) {
      if (amount > this.getbalance) {
        console.log("Insufficient balance");
      } else {
        this.getbalance = this.#balance - amount;
      }
    }
  }
  const myAccount = new Account("1234567890");
  myAccount.deposit(500);
  myAccount.withdraw(200);
  console.log(myAccount.getbalance); // output: 300
  myAccount.balance = -400;
  //Do not modify the return statement
  return Account;
}
main();
