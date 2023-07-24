import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
	if (props.items.length === 0) {
		return <h3 className="expenses-list__fallback">No Expenses Found.</h3>;
	}

	return (
		<ul className="expenses-list">
			{props.items.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
