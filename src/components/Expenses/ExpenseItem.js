import "./ExpenseItem.css";
import React from "react";
import Card from "../UI/Card";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
const ExpenseItem = (props) => {
	// const [Newtitle, setNewTitle]=useState("hi");
	// const [title, setTitle]=useState(props.title);

	// const clickHandler=()=>{
	//         setTitle(Newtitle);
	// }

	// const changeHandler=(event)=>{
	//     setNewTitle(event.target.value);
	// }

	return (
		<Card className="expense-item">
			{/* <ExpenseDate date={props.date}/> */}
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
				<div className="btns">
					<button>
						<FiEdit />
					</button>
					<button>
						<MdDelete />
					</button>
				</div>
			</div>
		</Card>
	);
};

export default ExpenseItem;
