import React from "react";
import useInput from "../hooks/use-input";

const SimpleInput = () => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: enteredNameHasError,
		inputChangeHandler: inputNameChangeHandler,
		inputOnBlurHandler: inputNameOnBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredAge,
		isValid: enteredAgeIsValid,
		hasError: enteredAgeHasError,
		inputChangeHandler: inputAgeChangeHandler,
		inputOnBlurHandler: inputAgeOnBlurHandler,
		reset: resetAgeInput,
	} = useInput((value) => +value > 0);

	let formIsValid = false;
	if (enteredNameIsValid && enteredAgeIsValid) {
		formIsValid = true;
	}

	const onSubmitHandler = (event) => {
		event.preventDefault();

		if (!enteredNameIsValid && !enteredAgeIsValid) {
			return;
		}

		console.log(enteredName, enteredAge);
		resetNameInput();
		resetAgeInput();
	};

	const nameInputStyles = enteredNameHasError
		? "form-control invalid"
		: "form-control";

	const ageInputStyles = enteredAgeHasError
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={onSubmitHandler}>
			<div className={nameInputStyles}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={inputNameChangeHandler}
					onBlur={inputNameOnBlurHandler}
					value={enteredName}
				/>
				{enteredNameHasError && (
					<p className="error-text">Enter a valid name!!</p>
				)}
			</div>
			<div className={ageInputStyles}>
				<label htmlFor="age">Your Age</label>
				<input
					type="number"
					id="age"
					onChange={inputAgeChangeHandler}
					onBlur={inputAgeOnBlurHandler}
					value={enteredAge}
				/>
				{enteredAgeHasError && (
					<p className="error-text">Enter a valid Age!!</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
