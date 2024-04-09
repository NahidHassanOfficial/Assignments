class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    this.balance = this.balance.toFixed(2);
    console.log(`$${amount} deposit successfull!`);
  }

  withdraw(amount) {
    amount = parseFloat(amount.toFixed(2));
    if (this.balance >= amount) {
      this.balance -= amount;
      this.balance = this.balance.toFixed(2);
      console.log(
        `$${amount} withdrawn successfull! Your new balance is $${this.balance}`
      );
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    console.log(`Your current balance is $${this.balance}`);
  }

  displayAccountInfo() {
    console.log(
      `Account Number: ${this.accountNumber}\nOwner Name: ${this.ownerName}\nCurrent Balance: $${this.balance}`
    );
  }
}

let person1 = new BankAccount(1001, "John Doe", 100);
let person2 = new BankAccount(1002, "Kim John", 200);

console.log("First Person\n------------");
person1.getBalance();
person1.deposit(30);
person1.withdraw(300);
person1.withdraw(80);
person1.getBalance();
person1.displayAccountInfo();

console.log("\n");

console.log("Second Person\n------------");
person2.getBalance();
person2.deposit(50);
person2.withdraw(300);
person2.withdraw(80.5);
person2.getBalance();
person2.displayAccountInfo();
