import React, { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChar = (value) => value.trim().length === 5;

const Checkout = (props) => {
	const [formInputsValidity, setFormInputsValidity] = useState({
		name: true,
		street: true,
		postal: true,
		city: true,
	});

	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postalInputRef = useRef();
	const cityInputRef = useRef();

	const formSubmitHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredStreet = streetInputRef.current.value;
		const enteredPostal = postalInputRef.current.value;
		const enteredCity = cityInputRef.current.value;

		const enteredNameIsValid = !isEmpty(enteredName);
		const enteredStreetIsValid = !isEmpty(enteredStreet);
		const enteredPostalIsValid = isFiveChar(enteredPostal);
		const enteredCityIsValid = !isEmpty(enteredCity);

		setFormInputsValidity({
			name: enteredNameIsValid,
			street: enteredStreetIsValid,
			postal: enteredPostalIsValid,
			city: enteredCityIsValid,
		});

		const formIsValid =
			enteredNameIsValid &&
			enteredStreetIsValid &&
			enteredPostalIsValid &&
			enteredCityIsValid;

		if (!formIsValid) {
			return;
		}

		props.onConfirm({
			name: enteredName,
			street: enteredStreet,
			postal: enteredPostal,
			city: enteredCity,
		});
	};

	const nameInputStyles = `${styles.control} ${
		!formInputsValidity.name ? styles.invalid : ""
	}`;
	const streetInputStyles = `${styles.control} ${
		!formInputsValidity.street ? styles.invalid : ""
	}`;
	const postalInputStyles = `${styles.control} ${
		!formInputsValidity.postal ? styles.invalid : ""
	}`;
	const cityInputStyles = `${styles.control} ${
		!formInputsValidity.city ? styles.invalid : ""
	}`;

	// we could use the custom input present in the UI folder here.
	return (
		<form className={styles.form} onSubmit={formSubmitHandler}>
			<div className={nameInputStyles}>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" ref={nameInputRef} />
				{!formInputsValidity.name && <p>Enter a valid Name!</p>}
			</div>
			<div className={streetInputStyles}>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={streetInputRef} />
				{!formInputsValidity.street && <p>Enter a valid street!</p>}
			</div>
			<div className={postalInputStyles}>
				<label htmlFor="postal">Postal Code</label>
				<input type="text" id="postal" ref={postalInputRef} />
				{!formInputsValidity.postal && (
					<p>Enter a valid postal code(5 character)!</p>
				)}
			</div>
			<div className={cityInputStyles}>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={cityInputRef} />
				{!formInputsValidity.city && <p>Enter a valid city!</p>}
			</div>
			<div className={styles.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button className={styles.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
