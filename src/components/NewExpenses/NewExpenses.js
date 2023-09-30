import React from "react";
import './NewExpenses.css';
import ExpenseForm from "./ExpenseForm";

const NewExpenses =(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
            const expenseData={
                ...enteredExpenseData
                // ,random:Math.random().toString()
            }
            props.onAddExpense(expenseData);
            console.log(expenseData);
    }

    return (
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
            </div>
    )
}

export default NewExpenses;