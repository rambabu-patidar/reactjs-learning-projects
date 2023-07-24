import React from "react";
import styles from "./ErrorModel.module.css";
import Button from "../Button/Button";

const ErrorModel = (props) => {
	return (
		<React.Fragment>
			<header className={styles.header}>
				<h1>{props.title}</h1>
			</header>
			<main className={styles.body}>
				<p>{props.message}</p>
			</main>
			<Button onClick={props.onClick} className="error-style" type="button">
				Okay
			</Button>
		</React.Fragment>
	);
};

export default ErrorModel;
