import React, { useState } from "react";
import Todo from "../models/Todo";

type TodosContextObject = {
	items: Todo[];
	addTodo: (text: string) => void;
	deleteTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObject>({
	items: [],
	addTodo: (text: string) => {},
	deleteTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children?: React.ReactNode }> = (
	props
) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (todoText: string) => {
		setTodos((prevTodos) => [...prevTodos, new Todo(todoText)]);
	};

	const deleteTodoHandler = (todoId: string) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
	};

	const contextValue: TodosContextObject = {
		items: todos,
		addTodo: addTodoHandler,
		deleteTodo: deleteTodoHandler,
	};
	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;
