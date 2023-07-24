// import { useState } from "react";

// // directly via useState

// const useInput = (validateValue) => {
// 	const [enteredValue, setEnteredValue] = useState("");
// 	const [isTouched, setIsTouched] = useState(false);

// 	const inputIsValid = validateValue(enteredValue);
// 	const hasError = !inputIsValid && isTouched;

// 	const inputChangeHandler = (event) => {
// 		setEnteredValue(event.target.value);
// 	};

// 	const inputOnBlurHandler = () => {
// 		setIsTouched(true);
// 	};

// 	const reset = () => {
// 		setEnteredValue("");
// 		setIsTouched(false);
// 	};
// 	return {
// 		enteredValue,
// 		isValid: inputIsValid,
// 		hasError,
// 		inputChangeHandler,
// 		inputOnBlurHandler,
// 		reset,
// 	};
// };

// export default useInput;

// VIA useReducer

import { useReducer } from "react";

const initialInputState = {
	value: "",
	isTouched: false,
};

const inputStateReducer = (state, action) => {
	if (action.type === "INPUT") {
		return { value: action.value, isTouched: state.isTouched };
	}

	if (action.type === "BLUR") {
		return { isTouched: true, value: state.value };
	}

	if (action.type === "RESET") {
		return { value: "", isTouched: false };
	}
	return initialInputState;
};

const useInput = (validateValue) => {
	const [inputState, inputStateDispatch] = useReducer(
		inputStateReducer,
		initialInputState
	);

	const inputIsValid = validateValue(inputState.value);
	const hasError = !inputIsValid && inputState.isTouched;

	const inputChangeHandler = (event) => {
		inputStateDispatch({ type: "INPUT", value: event.target.value });
	};

	const inputOnBlurHandler = () => {
		inputStateDispatch({ type: "BLUR" });
	};

	const reset = () => {
		inputStateDispatch({ type: "RESET" });
	};

	return {
		value: inputState.value,
		isValid: inputIsValid,
		hasError,
		inputChangeHandler,
		inputOnBlurHandler,
		reset,
	};
};

export default useInput;
