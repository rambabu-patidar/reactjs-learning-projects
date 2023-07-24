import React, { Component } from "react";
import UserFinder from "./Components/UserFinder";
import UsersContext from "./store/users-context";

const DUMMY_USERS = [
	{ id: "u1", name: "Max" },
	{ id: "u2", name: "Manuel" },
	{ id: "u3", name: "Julie" },
	{ id: "u4", name: "Tom" },
	{ id: "u5", name: "Cury" },
	{ id: "u6", name: "Jenny" },
];

class App extends Component {
	usersContext = {
		users: DUMMY_USERS,
	};

	render() {
		return (
			<UsersContext.Provider value={this.usersContext}>
				<UserFinder />
			</UsersContext.Provider>
		);
	}
}

// const App = (props) => {
// 	return (
// 		<div>
// 			<Users />
// 		</div>
// 	);
// };

export default App;
