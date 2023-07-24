import React, { Component } from "react";
import User from "./User";

import styles from "./Users.module.css";

class Users extends Component {
	constructor() {
		super();
		this.state = {
			showUsers: true,
			more: "StateValues",
		};
	}

	componentDidUpdate() {
		if (this.props.users.length === 0) {
			throw new Error("Error Occured!!");
		}
	}

	toggleUsersHandler() {
		this.setState((curState) => {
			return { showUsers: !curState.showUsers };
		});
	}

	render() {
		const usersList = (
			<ul>
				{this.props.users.map((user) => (
					<User key={user.id} name={user.name} />
				))}
			</ul>
		);

		return (
			<div className={styles.users}>
				<button onClick={this.toggleUsersHandler.bind(this)}>
					{this.state.showUsers ? "Hide" : "Show"} Users
				</button>
				{this.state.showUsers && usersList}
			</div>
		);
	}
}

// const Users = () => {
// 	const [showUsers, setShowUsers] = useState(true);

// 	const toggleUsersHandler = () => {
// 		setShowUsers((curState) => !curState);
// 	};

// 	const usersList = (
// 		<ul>
// 			{DUMMY_USERS.map((user) => (
// 				<User key={user.id} name={user.name} />
// 			))}
// 		</ul>
// 	);

// 	return (
// 		<div className={styles.users}>
// 			<button onClick={toggleUsersHandler}>
// 				{showUsers ? "Hide" : "Show"} Users
// 			</button>
// 			{showUsers && usersList}
// 		</div>
// 	);
// };

export default Users;
