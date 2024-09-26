/* eslint-disable react/prop-types */

const ExpenseTable = ({ expenses, deleteExpens }) => {

    return (
        <div className="expense-list">
            {expenses.map((expense, index) => (
                <div key={index} className="expense-item">
                    <button className="delete-button" onClick={() =>
                        deleteExpens(expense._id)}>X</button>
                    <div className="expense-description">{expense.text}</div>
                    <div
                        className="expense-amount"
                        style={{ color: expense.amount > 0 ? '#27ae60' : '#c0392b' }}
                    >₹{expense.amount}</div>
                </div>
            ))}
        </div>
    );
};

export default ExpenseTable;
