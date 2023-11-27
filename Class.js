//Creating a Bank Account details using Class method
class bankAccount {
  constructor(firstName, lastName, accountNo, balance, phoneNo) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.accountNo = accountNo;
    this.balance = balance;
    this.phoneNo = phoneNo;
  }

  //getter
  get GetFirstName() {
    return this.firstName;
  }
  get GetLastName() {
    return this.lastName;
  }
  get GetAccountNo() {
    return this.accountNo;
  }
  get GetBalance() {
    return this.balance;
  }
  get GetPhoneNo() {
    return this.phoneNo;
  }

  //setter
  set SetFirstName(firstName) {
    this.firstName = firstName;
  }
  set SetLastName(lastName) {
    this.lastName = lastName;
  }
  set SetAccountNo(accountNo) {
    this.accountNo = accountNo;
  }
  set SetBalance(balance) {
    this.balance = balance;
  }
  set SetPhoneNo(phoneNo) {
    this.phoneNo = phoneNo;
  }

  //deposit
  deposit(amount) {
    this.balance = this.balance + amount;
    return `Deposit of Rs.${amount} is successfull. Available balance is ${this.balance}`;
  }

  //withdrawal
  withdrawal(amount) {
    if (this.balance >= amount) {
      this.balance = this.balance - amount;
      return `Withdrawal of Rs.${amount} is successfull. Available balance is ${this.balance}`;
    } else {
      return "Insufficient balance!";
    }
  }
}

const SavingsAccount = new bankAccount(
  (firstName = "xyz"),
  (lastName = "xyz"),
  (accountNo = 1111111111),
  (balance = 10000),
  (phoneNo = 3987456321)
);

console.log(SavingsAccount);
console.log(SavingsAccount.firstName);
console.log(SavingsAccount.lastName);
console.log(SavingsAccount.accountNo);
console.log(SavingsAccount.balance);
console.log(SavingsAccount.phoneNo);

console.log((SavingsAccount.SetFirstName = "xyz"));
console.log((SavingsAccount.SetLastName = "xyz"));
console.log((SavingsAccount.SetAccountNo = "22222222"));
console.log((SavingsAccount.SetPhoneNo = "13456789"));
console.log((SavingsAccount.SetBalance = "30000"));

console.log(SavingsAccount.deposit(10000));
console.log(SavingsAccount.withdrawal(22000));
console.log(SavingsAccount.withdrawal(10000));

//Lets inherit the above created bankAccount
class specialAccount extends bankAccount {
  constructor(firstName, lastName, accountNo, balance, phoneNo) {
    super(firstName, lastName, accountNo, balance, phoneNo);
  }
}

const VipAccount = new specialAccount(
  firstName = "xyz",
  lastName = "xyz",
  accountNo = 1111111111,
  balance = 1000),
  phoneNo = 3987456321,
);

console.log(VipAccount);
console.log(VipAccount.firstName);
console.log(VipAccount.lastName);
console.log(VipAccount.accountNo);
console.log(VipAccount.balance);
console.log(VipAccount.phoneNo);

console.log((VipAccount.SetFirstName = "xyz"));
console.log((VipAccount.SetLastName = "xyz"));
console.log((VipAccount.SetAccountNo = "22222222"));
console.log((VipAccount.SetPhoneNo = "13456789"));
console.log((VipAccount.SetBalance = "30000"));

console.log(VipAccount.deposit(10000));
console.log(VipAccount.withdrawal(22000));
console.log(VipAccount.withdrawal(10000));
