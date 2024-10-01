/* eslint-disable react/prop-types */

const ExpenseTable = ({ expenses, deleteExpens }) => {
      
    return (
        <div className="expense-list mt-4 font-sans">
            {expenses.map((expense, index) => (
                <div key={index} className="expense-item">
                    <button className="delete-button" onClick={() =>
                        deleteExpens(expense._id)}>X</button>
                    <div className="expense-description">{expense.text}</div>
                    <div
                        className="expense-amount "
                        style={{ color: expense.amount > 0 ? '#27ae60' : '#c0392b' }}
                    >₹{expense.amount} <div className="text-gray-600 text-[0.8rem]">{expense.date.split('T')[0]}</div> </div>
                </div>
            ))}
        </div>
    );
};

export default ExpenseTable;
