const express = require('express');
const { addExpenses, FetchExpenses, deleteExpenses } = require('../Controllers/ExpensesController');
var router= express.Router();

//Fetch all expenses based on user_id
router.get('/', FetchExpenses)
//add Expense
router.post('/', addExpenses)
//delete Expense
router.delete('/:expenseId', deleteExpenses)

module.exports=router;