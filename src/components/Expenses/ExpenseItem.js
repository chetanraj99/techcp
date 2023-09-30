import './ExpenseItem.css';
import React, {useState} from "react";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem=(props)=>{
    
    // const [Newtitle, setNewTitle]=useState("hi");
    // const [title, setTitle]=useState(props.title);

    // const clickHandler=()=>{
    //         setTitle(Newtitle);
    // }

    // const changeHandler=(event)=>{
    //     setNewTitle(event.target.value);
    // }
    
    return (
        <Card className='expense-item'>
            {/* <ExpenseDate date={props.date}/> */}
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <input type='text' value={Newtitle} onChange={changeHandler}/> */}
            {/* <button onClick={clickHandler}>change Title</button> */}
        </Card>
    );
}

export default ExpenseItem;