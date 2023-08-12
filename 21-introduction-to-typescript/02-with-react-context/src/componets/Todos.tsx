import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

import styles from "./Todos.module.css";

const Todos: React.FC = () => {
	const todosCtx = useContext(TodosContext);
	return (
		<ul className={styles.todos}>
			{todosCtx.items.map((item) => (
				<TodoItem
					text={item.text}
					key={item.id}
					onDeleteTodo={todosCtx.deleteTodo.bind(null, item.id)}
				/>
			))}
		</ul>
	);
};

export default Todos;
