import React, { useState } from "react";
import BioInput from "./Components/BioInput/BioInput";
import BioList from "./Components/BioList/BioList";

import styles from "./App.module.css";

const App = () => {
	const [users, setUsers] = useState([]);

	const newUserHandler = (userInput) => {
		setUsers((prevUsers) => {
			const updatedUsers = [...prevUsers];
			updatedUsers.push(userInput);
			return updatedUsers;
		});
	};

	return (
		<div className={styles["bio-container"]}>
			<BioInput getNewUser={newUserHandler} />
			<BioList items={users} />
		</div>
	);
};
export default App;
