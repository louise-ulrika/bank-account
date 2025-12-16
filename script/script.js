const account = {
    accountName:"Chloe Matthews",
    balance:41000,
    getBalance:function(){
        console.log(this.balance);
    },
    deposit(amount){
         const message= parseFloat(prompt("Enter deposit amount:"));
        this.balance += amount;
    },
    withdrawal(amount){
        const message= parseFloat(prompt("Enter withdrawal amount:"));
        this.balance -= amount;

    },
    getAccountName(){
        const message= parseFloat(prompt("Enter your account name:"));
        console.log(this.accountName);
    },
    accountError(){
        const message= parseFloat(prompt("Enter your account name:"));
        console.log("Error: Account not found.");
    },   

    
    };

account.getBalance(); 
account.getAccountName();
account.deposit(5000);
account.withdrawal(2000);
