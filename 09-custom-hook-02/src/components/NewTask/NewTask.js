import React from "react";

import UseHttp from "../../hooks/use-http";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
	const { isLoading, error, sendRequest: sendTaskRequest } = UseHttp();

	const transformTasks = (taskText, tasksObj) => {
		const generatedId = tasksObj.name; // firebase-specific => "name" contains generated id
		const createdTask = { id: generatedId, text: taskText };

		props.onAddTask(createdTask);
	};

	const enterTaskHandler = (taskText) => {
		sendTaskRequest(
			{
				url: "https://react-http-fc34a-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: { text: taskText },
			},
			transformTasks.bind(null, taskText)
		);
	};

	return (
		<Section>
			<TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
			{error && <p>{error}</p>}
		</Section>
	);
};

export default NewTask;
