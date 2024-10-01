/* eslint-disable react/prop-types */


function ExpenseDetails({ incomeAmt, expenseAmt }) {
    return (
        <div className="font-sans text-[1.2rem]">
            <div className="font-medium">
                Your Balance is ₹ {incomeAmt - expenseAmt}
            </div>
            {/* Show Income & Expense amount */}
            <div className="amounts-container ">
                Income
                <span className="income-amount">₹{incomeAmt}</span>
                Expense
                <span className="expense-amount">₹{expenseAmt}</span>
            </div>
        </div>
    )
}

export default ExpenseDetails