import React, { useEffect, useState } from "react";
import UseHttp from "./hooks/use-http";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
	const [tasks, setTasks] = useState([]);

	// Object destructuring
	const { isLoading, error, sendRequest: fetchTasks } = UseHttp();

	// To load initially when component loads
	useEffect(() => {
		const transformTasks = (tasksObj) => {
			const loadedTasks = [];

			for (const taskKey in tasksObj) {
				loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
			}
			setTasks(loadedTasks);
		};

		fetchTasks(
			{
				url: "https://react-http-fc34a-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
			},
			transformTasks
		);
	}, [fetchTasks]);

	const taskAddHandler = (task) => {
		setTasks((prevTasks) => prevTasks.concat(task));
	};

	return (
		<React.Fragment>
			<NewTask onAddTask={taskAddHandler} />
			<Tasks
				items={tasks}
				loading={isLoading}
				error={error}
				onFetch={fetchTasks}
			/>
		</React.Fragment>
	);
}

export default App;
