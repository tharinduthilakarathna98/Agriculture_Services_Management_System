const Loan = require("../models/LoansModel");

const addLoan = (req, res) => {
    const {Loan_Id, Name_Identity_No, Name_with_Initials, Age, Nearest_Branch, Phone, Email, Profession,Account_Number,Agriculture_Income,Other_Incomes,Total_Income,Name_of_the_Bank, Name_of_the_Branch,  Decleration} = req.body;
    const newLoan = new Loan({
        Loan_Id,
        Name_Identity_No,
        Name_with_Initials,
        Age,
        Nearest_Branch,
        Phone,
        Email,
        Profession,
        Account_Number,
        Agriculture_Income,
        Other_Incomes,
        Total_Income,
        Name_of_the_Bank,
        Name_of_the_Branch,
        Decleration,


    });

    newLoan.save().then((createdLoan)=>{
        res.json(createdLoan);
    }).catch((err)=>{
        console.log(error);
    });
};
const getLoan = async(req,res)=>{
    try{
        const loan = await Loan.find();
        res.json(loan)
    }catch(error){
        res.status(400).json(error);
    }
}


const removeLoan = async (req, res)=> {

    const Loan_id = req.params.id;

    try{

        const loan = await Loan.findById(Loan_id);

        if(!loan){

            return res.status(404).json("There is no loan");
        }

        const removeLoan = await Loan.findByIdAndDelete(Loan_id);
        res.status(200).json(removeLoan);
    }catch (error) {

        res.status(400).json(error.message);


    }
}

    module.exports = {
     addLoan,
     getLoan,
     removeLoan
    }