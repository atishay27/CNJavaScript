//complete the ExpenseTracker class.
// Do not alter the starter code
function main() {
  class ExpenseTracker {
    //Create your private properites here
    #expense;
    #income;
    //Create a constructor function
    constructor(income) {
      this.#income = income;
      this.#expense = [];
    }
    //create your private properties to calculate expenses
    #calculateTotalExpenses() {
      return this.#expense.reduce((acc, cv) => {
        return acc + cv.amount;
      }, 0);
    }
    //Create your public properties here
    addExpense(name, amount, date) {
      this.#expense.push({ name, amount, date });
    }
    calculateBalance() {
      return this.#income - this.#calculateTotalExpenses();
    }
  }
  //The class should function accordingly.
  const tracker = new ExpenseTracker(5000);
  tracker.addExpense("Rent", 1000, "2021-10-01");
  tracker.addExpense("Groceries", 500, "2021-10-02");
  console.log(tracker.calculateBalance()); // should output 3500
  return ExpenseTracker;
}
main();
