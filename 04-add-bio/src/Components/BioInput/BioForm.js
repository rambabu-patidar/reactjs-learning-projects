import React, { useRef } from "react";
import Button from "../UI/Button/Button";

import styles from "./BioForm.module.css";

const myErrorContent = {
	generalError: {
		title: "An Error Occured",
		message: "Please Enter the valid name and age.",
	},
	nameError: {
		title: "Invalid Name",
		message: "Name can't be empty string.",
	},
	ageError: {
		title: "Invalid age",
		message: "Please Enter the valid age(age > 0).",
	},
};
const BioForm = (props) => {
	// Refs for input
	const userNameRef = useRef();
	const userAgeRef = useRef();

	const formSubmitHandler = (event) => {
		event.preventDefault();
		const enteredUserName = userNameRef.current.value;
		const enteredUserAge = userAgeRef.current.value;

		const isValidName = enteredUserName.trim().length !== 0;
		const isValidAge = enteredUserAge > 0;
		if (!(isValidName && isValidAge)) {
			if (!(isValidName || isValidAge)) {
				props.onError(myErrorContent.generalError);
			} else if (!isValidName) {
				props.onError(myErrorContent.nameError);
			} else {
				props.onError(myErrorContent.ageError);
			}

			return;
		}
		const newUser = {
			name: enteredUserName,
			age: enteredUserAge,
			id: Math.random().toString(),
		};
		props.onSubmit(newUser);
		userNameRef.current.value = "";
		userAgeRef.current.value = "";
	};

	return (
		<form className={styles["bio-form"]} onSubmit={formSubmitHandler}>
			<div className={styles["bio-form__controls"]}>
				<div>
					<label>UserName</label>
					<input
						type="text"
						className={styles["bio-form__controls__input"]}
						ref={userNameRef}
					></input>
				</div>
				<div>
					<label>Age(Years)</label>
					<input
						type="number"
						className={styles["bio-form__controls__input"]}
						ref={userAgeRef}
					></input>
				</div>
			</div>
			<Button type="submit">Add User</Button>
		</form>
	);
};

export default BioForm;
