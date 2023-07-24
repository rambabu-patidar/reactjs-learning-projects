import React, {
	useState,
	useEffect,
	useReducer,
	useContext,
	useRef,
} from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthContext from "../../store/auth-context";
import classes from "./Login.module.css";

const emailReducer = (prevEmailState, dispatchedEmailAction) => {
	const action = dispatchedEmailAction;
	if (action.type === "INPUT_EMAIL") {
		return {
			value: action.val,
			isValid: action.val.includes("@"),
		};
	}

	if (action.type === "EMAIL_VALIDITY") {
		return {
			value: prevEmailState.value,
			isValid: prevEmailState.value.includes("@"),
		};
	}
	return { value: "", isValid: false };
};

const passwordReducer = (prevPasswordState, dispatchedPasswordAction) => {
	const action = dispatchedPasswordAction;

	if (action.type === "INPUT_PASSWORD") {
		return { value: action.val, isValid: action.val.trim().length > 6 };
	}

	if (action.type === "PASSWORD_VALIDITY") {
		return {
			value: prevPasswordState.value,
			isValid: prevPasswordState.value.trim().length > 6,
		};
	}
	return { value: "", isValid: false };
};

// Component

const Login = (props) => {
	// const [enteredEmail, setEnteredEmail] = useState("");
	// const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState("");
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, emailDispatch] = useReducer(emailReducer, {
		value: "",
		isValid: null,
	});

	const [passwordState, passwordDispatch] = useReducer(passwordReducer, {
		value: "",
		isValid: null,
	});

	const authCtx = useContext(AuthContext);

	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const { isValid: emailIsValid } = emailState;
	const { isValid: passwordIsValid } = passwordState;

	useEffect(() => {
		const setTimeoutId = setTimeout(() => {
			console.log("Checking form validity!");
			setFormIsValid(emailIsValid && passwordIsValid);
		}, 500);

		return () => {
			console.log("CLEANUP");
			clearTimeout(setTimeoutId);
		};
	}, [emailIsValid, passwordIsValid]);

	const emailChangeHandler = (event) => {
		emailDispatch({ type: "INPUT_EMAIL", val: event.target.value });

		// setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
	};

	const passwordChangeHandler = (event) => {
		passwordDispatch({ type: "INPUT_PASSWORD", val: event.target.value });

		// setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
	};

	const validateEmailHandler = () => {
		emailDispatch({ type: "EMAIL_VALIDITY" });
	};

	const validatePasswordHandler = () => {
		passwordDispatch({ type: "PASSWORD_VALIDITY" });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (formIsValid) {
			authCtx.onLogin(emailState.value, passwordState.value);
		} else if (!emailIsValid) {
			emailInputRef.current.focus();
		} else {
			passwordInputRef.current.focus();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailInputRef}
					id="email"
					label="E-mail"
					type="email"
					isValid={emailIsValid}
					value={emailState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>

				<Input
					ref={passwordInputRef}
					id="password"
					label="Password"
					type="password"
					isValid={passwordIsValid}
					value={passwordState.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>

				<div className={classes.actions}>
					<Button type="submit" className={classes.btn}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
