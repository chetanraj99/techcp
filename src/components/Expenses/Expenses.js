import './Expenses.css';
import React from "react";
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
const Expenses=(props)=>{
    return (
            <Card className='expenses'>
                {
                    props.item.map(expense => (
                        <ExpenseItem
                            title={expense.title}
                            amount={expense.id}
                            // date={expense.data}
                            />
                        // </ExpenseItem>
                    ))
                }
            </Card>
    ); 
}
export default Expenses;