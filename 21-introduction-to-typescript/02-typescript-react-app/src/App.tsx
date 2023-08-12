import React, { useState } from "react";

import NewTodo from "./componets/NewTodo";
import Todos from "./componets/Todos";
import Todo from "./models/Todo";

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (todoText: string) => {
		setTodos((prevTodos) => [...prevTodos, new Todo(todoText)]);
	};

	const deleteTodoHandler = (todoId: string) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
	};

	return (
		<div>
			<NewTodo onAddTodo={addTodoHandler} />
			<Todos items={todos} onDeleteTodo={deleteTodoHandler} />
		</div>
	);
}

export default App;
