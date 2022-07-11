const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema({

    Loan_Id:String,
    Name_Identity_No:String,
    Name_with_Initials:String,
    Age:String,
    Nearest_Branch:String,
    Phone:String,
    Email:String,
    Profession:String,
    Account_Number:String,
    Agriculture_Income:String,
    Other_Incomes:String,
    Total_Income:String,
    Name_of_the_Bank:String,
    Name_of_the_Branch:String,
    Decleration:String,
    

    
});

const loansModel = mongoose.model("loansModel", loanSchema)
module.exports = loansModel;