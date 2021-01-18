"use strict"

class bankAccout {
    constructor(owner, accountNumber){
        this.accountNumber = accountNumber
        this.owner = owner
        this.transactions = []
    }
    
    balance(){
        let sum = 0;
        for(let i=0; i<this.transaction.length; i++){
            sum += this.transaction[i].amount;
        }
        return sum;
    }

    charge(payee, amt){
        let currentBalance = this.balance
        if(amt <= currentBalance){
        let chargeTransaction = new Transaction(-amt,payee)
        this.transaction.push(chargeTransaction)
      }
    }

    deposit(amt){
        if(amt > 0){
          let depositTransaction = new Transaction(amt, "deposit")
          this.transaction.push(depositTransaction);
        }
      }
    }
class Transaction {
    constructor(amount, payee){
      this.amount = amount
      this.payee = payee
      this.date = new Date()
    }
  }

  class SavingsAccount extends BankAccout {

      constructor(accountNumber, owner,interestRate)
          super(accountNumber, owner);
          this.interestRate = interestRate;
      }

  accrueInterest(){
    let currentBalance = this.balance();
    let interestAmt = currentBalance * this.interestRate;
    let interestTransaction = new Transaction(interestAmt, "Interest");
    this.transaction.push(interestTransaction);
  }