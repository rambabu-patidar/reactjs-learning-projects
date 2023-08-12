import React, { useRef, useContext } from "react";
import styles from "./NewTodo.module.css";

import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
	const todosCtx = useContext(TodosContext);

	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const onSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			// throw an error
			return;
		}
		todosCtx.addTodo(enteredText);
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
