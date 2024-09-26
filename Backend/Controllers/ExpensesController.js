const users = require("../Models/users");

const addExpenses =async function(req,res){
    const {_id}=req.user;
   try{
    const userData = await users.findByIdAndUpdate(
        _id,
        { $push: { expenses: req.body } },
        { new: true } // For Returning the updated documents
    )
    res.status(200)
        .json({
            message: "Expense added successfully",
            success: true,
            data: userData?.expenses
        })
   }catch(err){
    return res.status(500).json({
        message:err.message,
        success:false
    })
   }
}

const FetchExpenses = async function(req,res){
    const {_id}=req.user;
    try{
       const userdata =  await users.findById(_id).select('expenses')
         return res.status(200).json({
             message: "Fetched Expenses successfully",
             success: true,
             data: userdata.expenses
             })
    }catch(err){
     return res.status(500).json({
         message:err.message,
         success:false
     })
    }
}

const deleteExpenses = async function(req,res){
    const {_id}=req.user;
    const { expenseId } = req.params; 
    try{
       const userdata =  await users.findByIdAndUpdate(
             _id,
             { $pull: { expenses: {_id : expenseId} } },
             { new: true } // for returning the upadated documents
         )
         return res.status(200).json({
             message: "Expenses deleted successfully",
             success: true,
             data: userdata.expenses
             })
    }catch(err){
     return res.status(500).json({
         message:err.message,
         success:false
     })
    } 
}

module.exports={
    addExpenses,
    FetchExpenses,
    deleteExpenses
}