import React, { useState } from "react";
import ReactDOM from "react-dom";

import BioForm from "./BioForm";
import Card from "../UI/Card/Card";
import ErrorModel from "../UI/ErrorModel/ErrorModel";

import styles from "./BioInput.module.css";

const BioInput = (props) => {
	// If we want to set some props on the card we have to manually add them and use them in Card.js file like we send props
	const [isError, setIsError] = useState(false);
	const [errorTitle, setErrorTitle] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const onErrorHandler = (errorInfo) => {
		setErrorTitle(errorInfo.title);
		setErrorMessage(errorInfo.message);
		setIsError(true);
	};

	const removeOverlayHandler = (event) => {
		setIsError(false);
	};

	const Backdrop = (props) => {
		return <div className={styles.overlay} onClick={props.onClick}></div>;
	};

	const ModalOverlay = (props) => {
		return (
			<Card className="error-style">
				<ErrorModel
					title={props.errTitle}
					message={props.errMessage}
					onClick={props.onClick}
				/>
			</Card>
		);
	};

	return (
		<React.Fragment>
			{isError && (
				<React.Fragment>
					{/* <div className={styles.overlay} onClick={removeOverlayHandler}></div>
					<Card className="error-style">
						<ErrorModel
							title={errorTitle}
							message={errorMessage}
							onClick={removeOverlayHandler}
						/>
					</Card> */}
					{ReactDOM.createPortal(
						<Backdrop onClick={removeOverlayHandler} />,
						document.getElementById("overlay")
					)}

					{ReactDOM.createPortal(
						<ModalOverlay
							errTitle={errorTitle}
							errMessage={errorMessage}
							onClick={removeOverlayHandler}
						/>,
						document.getElementById("error-model")
					)}
				</React.Fragment>
			)}
			<Card>
				<BioForm onError={onErrorHandler} onSubmit={props.getNewUser} />
			</Card>
		</React.Fragment>
	);
};

export default BioInput;
