import React from "react";
import useInputII from "../hooks/use-input-II";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
	const {
		enteredValue: enteredFirstName,
		isValid: enteredFirstNameIsValid,
		hasError: enteredFirstNameHasError,
		inputChangeHandler: firstNameInputChangeHandler,
		inputOnBlurHandler: firstNameOnBlurHandler,
		reset: firstNameInputReset,
	} = useInputII(isNotEmpty);

	const {
		enteredValue: enteredLastName,
		isValid: enteredLastNameIsValid,
		hasError: enteredLastNameHasError,
		inputChangeHandler: lastNameInputChangeHandler,
		inputOnBlurHandler: lastNameOnBlurHandler,
		reset: lastNameInputReset,
	} = useInputII(isNotEmpty);

	const {
		enteredValue: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: enteredEmailHasError,
		inputChangeHandler: emailInputChangeHandler,
		inputOnBlurHandler: emailOnBlurHandler,
		reset: emailInputReset,
	} = useInputII(isEmail);

	let formIsValid = false;
	if (
		enteredFirstNameIsValid &&
		enteredLastNameIsValid &&
		enteredEmailIsValid
	) {
		formIsValid = true;
	}

	const formSubmitHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		console.log(enteredFirstName, enteredLastName, enteredEmail);

		firstNameInputReset();
		lastNameInputReset();
		emailInputReset();
	};

	const firstNameStyles = enteredFirstNameHasError
		? "form-control invalid"
		: "form-control";
	const lastNameStyles = enteredLastNameHasError
		? "form-control invalid"
		: "form-control";
	const emailStyles = enteredEmailHasError
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="control-group">
				<div className={firstNameStyles}>
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						id="name"
						onChange={firstNameInputChangeHandler}
						onBlur={firstNameOnBlurHandler}
						value={enteredFirstName}
					/>
					{enteredFirstNameHasError && (
						<p className="error-text">Enter a valid first name!!</p>
					)}
				</div>
				<div className={lastNameStyles}>
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						id="name"
						onChange={lastNameInputChangeHandler}
						onBlur={lastNameOnBlurHandler}
						value={enteredLastName}
					/>
					{enteredLastNameHasError && (
						<p className="error-text">Enter a valid last Name!!</p>
					)}
				</div>
			</div>
			<div className={emailStyles}>
				<label htmlFor="name">E-Mail Address</label>
				<input
					type="text"
					id="name"
					onChange={emailInputChangeHandler}
					onBlur={emailOnBlurHandler}
					value={enteredEmail}
				/>
				{enteredEmailHasError && (
					<p className="error-text">Enter a valid Email!!</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
