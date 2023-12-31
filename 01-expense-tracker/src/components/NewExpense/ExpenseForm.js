import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	const [error, setError] = useState(false);

	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// });

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);

		// This might lead to work on the previous state and not on the updated one because when
		// the component is loaded it is not just at the moment everything gets changed and take time
		// so it may do its work on previous state and that will we an error.
		// so instead of this:

		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.target.value,
		// });

		// use this:
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredTitle: event.target.value };
		// });
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: event.target.value,
		// });
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: event.target.value,
		// });
	};

	const submitHandler = (event) => {
		event.preventDefault(); // prevent the page reload.
		setError(false);

		if (
			enteredTitle.trim().length <= 0 ||
			enteredAmount < 0 ||
			enteredDate.trim().length <= 0
		) {
			setError(true);
			return;
		}
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	const errorElement = <p className="error">Can't submit empty form!</p>;

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						value={enteredAmount}
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						value={enteredDate}
						min="2019-01-01"
						max="2022-12-31"
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			{error && errorElement}
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
