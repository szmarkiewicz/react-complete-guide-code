import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = React.useState(false);

  let expenseFormContent = <button onClick={() => setShowForm(true)}>Add New Expense</button>;

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
  };

  if (showForm)
    expenseFormContent = <ExpenseForm onAddExpense={() => setShowForm(false)} onSaveExpenseData={saveExpenseDataHandler} />;

  return (
    <div className='new-expense'>
      {expenseFormContent}
    </div>
  );
};

export default NewExpense;
