const account = {
    accountName:"Chloe Matthews",
    balance:41000,
    getBalance:function(){
        console.log(this.balance);
    },
    deposit(amount){
        this.balance += amount;
    },
    withdrawal(amount){
        this.balance -= amount;

    },
    getAccountName(){
        console.log(this.accountName);
    },
    accountError(){
        console.log("Error: Account not found.");
    },   

    exitAccount(){
        console.log("Exiting account...");
    },
}
account.getBalance(); 
