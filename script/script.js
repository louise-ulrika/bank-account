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
        console.log(this.balance);

    },
    getAccountName(){
        const message= parseFloat(prompt("Enter your account name:"));
        console.log(this.accountName);
    },
    accountError(){
        const message= parseFloat(prompt("Enter your account name:"));
        console.log("Error: Account not found.");
    },   

    
    
}

account.getBalance(); 
account.getAccountName();
account.deposit(5000);
account.withdrawal(2000);




    function atm(){ const message= parseFloat(prompt("Select a choice 1.) See balance, 2.) Make a deposit 3.) Make a withdrawal 4.)Get account Name 5.) Exit") 
   
);
   
switch(message) {
    case 1:
        getBalance();
        break;
    case 2:
        deposit();
        break;
    case 3:
        withdrawal();
        break;
    case 4:
        getAccountName();
        break;
    case 5:
        console.log("Thank you for banking with us!");
        break;
    default:
        this.accountError();
        break;
} }

atm();
