import React, { useState, useEffect } from "react";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Expenses from "./components/Expenses/Expenses";

let DUMMY_EXPENSES = [];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
	const [loading, setLoading] = useState(false);
	function fetchData() {
		fetch("https://springrest-production-b769.up.railway.app/courses")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setExpenses(data);
			});
	}

	useEffect(() => fetchData(), []);

	const addExpenseHandler = (expense) => {
		setLoading(true);
		fetch("https://springrest-production-b769.up.railway.app/courses", {
			method: "POST",
			body: JSON.stringify(expense),
			headers: { "content-Type": "application/json" },
		}).then((response) => {
			fetchData();
			setLoading(false);
		});

		// const updatedExpense=[expense ,...expenses];
		// setExpenses(updatedExpense);
	};

	return (
		<div>
			<NewExpenses onAddExpense={addExpenseHandler} />
			{!loading ? (
				<Expenses item={expenses} setExpenses={setExpenses} />
			) : (
				<div style={{ textAlign: "center" }}>Data Adding...</div>
			)}
		</div>
	);
};

export default App;
