import React, { useRef } from "react";
import styles from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const onSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			// throw an error
			return;
		}
		props.onAddTodo(enteredText);
	};

	return (
		<form onSubmit={onSubmitHandler} className={styles.form}>
			<label htmlFor="text">Enter Todo</label>
			<input type="text" id="text" ref={todoTextInputRef} />
			<button>Save</button>
		</form>
	);
};

export default NewTodo;
