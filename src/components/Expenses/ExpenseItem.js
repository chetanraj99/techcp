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

	const setExpenses = props.setExpenses;

	const handleDelete = (id) => {
		const deleteData = async () => {
			try {
				fetch(
					`https://springrest-production-b769.up.railway.app/courses/${id}`,
					{
						method: "DELETE",
						headers: { "content-Type": "application/json" },
					}
				).then(() => {
					setExpenses((preState) => {
						return preState.filter((data) => {
							return data.id !== id;
						});
					});
				});
			} catch (error) {
				console.log(error);
			}
		};
		deleteData();
	};

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
					<button onClick={() => handleDelete(props.id)}>
						<MdDelete />
					</button>
				</div>
			</div>
		</Card>
	);
};

export default ExpenseItem;
